import axios from "axios";
import React, { useEffect, useState } from "react";
import  "./GetThuongHieu.css"; // Assuming the CSS file is named GetThuongHieu.css



function GetThuongHieu() {
  const [thuongHieu, setThuongHieu] = useState(""); // Brand name
  const [products, setProducts] = useState([]); // Product data
  const [imageUrls, setImageUrls] = useState({}); // Store image URLs

  // Fetch products by thuongHieu (brand)
  useEffect(() => {
    if (!thuongHieu) return; // Don't fetch if thuongHieu is empty

    const fetchSanPhamByThuongHieu = async () => {
      try {
        const response = await axios.get(
          `https://doubleshop.linkpc.net/endpoints/SanPham/thuongHieu/${thuongHieu}`
        );
        setProducts(response.data); // Set the products in state
      } catch (error) {
        console.log(error);
      }
    };

    fetchSanPhamByThuongHieu(); // Call the function to fetch products
  }, [thuongHieu]); // Re-run the effect when `thuongHieu` changes

  // Function to download images for the products
  const downloadImage = async (imageName) => {
    try {
      const response = await axios.get(
        `https://doubleshop.linkpc.net/endpoints/SanPham/image/download/${imageName}`,
        { responseType: "blob" }
      );
      const imageUrl = URL.createObjectURL(response.data); // Create a URL from the blob
      setImageUrls((prev) => ({
        ...prev,
        [imageName]: imageUrl, // Store the image URL for each image name
      }));
    } catch (error) {
      console.error("Error downloading image: ", error);
    }
  };

  // Effect to download images when products are fetched
  useEffect(() => {
    // Loop through each product and download the image if available
    products.forEach((product) => {
      if (product.hinhAnhUrl) {
        downloadImage(product.hinhAnhUrl); // Download image for the product
      }
    });
  }, [products]); // Re-run when products are updated

  return (
    <div className="container">
      <h1 className="hienthi_getThuonghieu">Hãng bạn yêu thích là: {thuongHieu || ""} </h1>

      {/* Input field to change the brand */}
      <div className="container_get">
        <input
          type="text"
          placeholder="Enter brand name (e.g., vivo)"
          value={thuongHieu}
          onChange={(e) => setThuongHieu(e.target.value)} 
          className="input_getThuongHieu"// Update brand name when user types
        />
      </div>

      {/* Display products */}
      <div className="product-list">
        {products.length > 0 ? (
          products.map((product) => (
            <div key={product.maSanPham} className="product-card">
              <h3>{product.tenSanPham}</h3>
              <p>{product.moTa}</p>
              <p className="price">₫ {product.gia.toLocaleString()}</p>
              {/* Show the downloaded image or a fallback image */}
              <img
                src={imageUrls[product.hinhAnhUrl] || "/default-image.jpg"}
                alt={product.tenSanPham}
              />
            </div>
          ))
        ) : (
          <p className="no-products">Nhập sản phẩm vào ô trên nhé Khách iu.</p>
        )}
      </div>
    </div>
  );
}

export default GetThuongHieu;
