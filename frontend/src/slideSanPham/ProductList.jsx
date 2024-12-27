import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./ProductList.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faPercent } from "@fortawesome/free-solid-svg-icons";

const ProductList = () => {
  const thuongHieus = ["Tất cả", "Xiaomi", "Samsung", "Iphone", "Oppo", "Realme"]; // Danh sách thương hiệu
  const [selectedThuongHieu, setSelectedThuongHieu] = useState("Tất cả");
  const [sanPhams, setSanPhams] = useState([]);
  const [filteredSanPhams, setFilteredSanPhams] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(10);
  const [imageUrls, setImageUrls] = useState({});
  const [searchQuery, setSearchQuery] = useState(""); // Dữ liệu tìm kiếm

  // Lấy tất cả sản phẩm từ API một lần duy nhất khi component được mount
  useEffect(() => {
    const fetchSanPhams = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await axios.get(
          `https://doubleshop.linkpc.net/endpoints/SanPham?page=${page}&size=${size}`
        );
        setSanPhams(response.data.content || []);
        setLoading(false);
      } catch (e) {
        setError("Có lỗi khi tải dữ liệu: " + e.message);
        setLoading(false);
      }
    };

    fetchSanPhams();
  }, [page, size]);

  // Lọc sản phẩm khi chọn thương hiệu hoặc tìm kiếm
  useEffect(() => {
    let filtered = sanPhams;

    // Lọc theo thương hiệu
    if (selectedThuongHieu !== "Tất cả") {
      filtered = filtered.filter(
        (sanPham) => sanPham.thuongHieu.toLowerCase() === selectedThuongHieu.toLowerCase()
      );
    }

    // Lọc theo từ khóa tìm kiếm
    if (searchQuery) {
      filtered = filtered.filter((sanPham) =>
        sanPham.tenSanPham.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredSanPhams(filtered);
  }, [selectedThuongHieu, sanPhams, searchQuery]);

  // Tải ảnh sản phẩm
  const downloadImage = async (imageName) => {
    try {
      const response = await axios.get(
        `https://doubleshop.linkpc.net/endpoints/SanPham/image/download/${imageName}`,
        { responseType: "blob" }
      );
      const imageUrl = URL.createObjectURL(response.data);
      setImageUrls((prev) => ({
        ...prev,
        [imageName]: imageUrl,
      }));
    } catch (error) {
      console.error("Lỗi khi tải ảnh: ", error);
    }
  };

  useEffect(() => {
    sanPhams.forEach((sanPham) => {
      if (sanPham.hinhAnhUrl) {
        downloadImage(sanPham.hinhAnhUrl);
      }
    });
  }, [sanPhams]);

  if (loading) {
    return <div>Đang tải...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
      <h1 className="h1_banner_main">Các Sản Phẩm Nổi Bật</h1>

      {/* Thanh tìm kiếm */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Tìm kiếm sản phẩm..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Danh mục thương hiệu */}
      <div className="filter">
        {thuongHieus.map((thuongHieu, index) => (
          <button
            key={index}
            onClick={() => setSelectedThuongHieu(thuongHieu)}
            className={`filter-button ${selectedThuongHieu === thuongHieu ? "active" : ""}`}
          >
            {thuongHieu}
          </button>
        ))}
      </div>

      {/* Danh sách sản phẩm */}
      {filteredSanPhams.length > 0 ? (
        filteredSanPhams.map((sanPham) => (
          <Link
            key={sanPham.maSanPham}
            to={`/product-detail/${sanPham.maSanPham}`}
            className="product-card-link"
          >
            <div className="product-card">
              <img
                src={imageUrls[sanPham.hinhAnhUrl]}
                alt={sanPham.tenSanPham}
                className="img-productList"
              />
              <h1 className="tenSanPham">{sanPham.tenSanPham}</h1>
              <p className="price">Giá: {sanPham.gia.toLocaleString()} VND</p>
              <p className="soLuong">
                Mua ngay giảm {sanPham.soLuong}{" "}
                <FontAwesomeIcon icon={faPercent} className="font" />
              </p>
              <div className="flex_doannay">
                <p className="thuongHieu">Thương hiệu: {sanPham.thuongHieu}</p>
                <FontAwesomeIcon icon={faCartShopping} className="font-muasam" />
              </div>
            </div>
          </Link>
        ))
      ) : (
        <p>Đã hết sản phẩm.</p>
      )}

      {/* Phân trang */}
      <div className="pagination">
        <button onClick={() => setPage(page - 1)} disabled={page === 0}>
          Previous
        </button>
        <button onClick={() => setPage(page + 1)}>Next</button>
      </div>
    </>
  );
};

export default ProductList;
