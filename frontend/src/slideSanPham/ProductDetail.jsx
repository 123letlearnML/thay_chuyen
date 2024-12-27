import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './ProductDetail.css';
import { library } from '@fortawesome/fontawesome-svg-core';  // Import the library
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'; 
import { Link } from 'react-router-dom';

library.add(faArrowLeft);
const ProductDetail = () => {
    const { id } = useParams(); // Get the product ID from URL
    const [product, setProduct] = useState(null); // State to store product data
    const [error, setError] = useState(null); // State to store error messages
    const navigate = useNavigate(); // Hook to navigate programmatically

    // Effect to handle restoring scroll position
    useEffect(() => {
        // const savedScrollPosition = sessionStorage.getItem('scrollPosition');
        // if (savedScrollPosition) {
        //     window.scrollTo(0, savedScrollPosition); // Restore scroll position
        //     sessionStorage.removeItem('scrollPosition'); // Clear saved scroll position
        // }

        // Fetch product details
        const fetchProductDetail = async () => {
            try {
                const response = await axios.get(`https://doubleshop.linkpc.net/endpoints/SanPham/${id}`);
                setProduct(response.data); // Set product data
            } catch (error) {
                setError("Error fetching product details. Please try again later.");
                console.error("Error fetching product detail", error);
            }
        };


        fetchProductDetail(); // Fetch product details when component is mounted
    }, [id]);

    // If error occurred, display error message
    if (error) return <div className="error-message">{error}</div>;

    // Show loading message if product data isn't available yet
    if (!product) return <div>Loading...</div>;

    const formatDescription = (description) => {
        return description.split('\n').map((item, index) => {
            return <span key={index}>{item}<br /></span>;
        });
    };

    // Function to handle back navigation
    const handleBack = () => {
        // Save the current scroll position before navigating back
        sessionStorage.setItem('scrollPosition', window.scrollY);

        navigate(-1); // Navigate back to the previous page
    };


  
    const addToCart = (product) => {
        const cart = JSON.parse(localStorage.getItem("cart")) || [];
        // Check if the product already exists in the cart
        const existingProductIndex = cart.findIndex(item => item.id === product.id);
    
        if (existingProductIndex >= 0) {
          // If product exists, update the quantity
          cart[existingProductIndex].quantity += 1;
        } else {
          // If product doesn't exist, add it to the cart with quantity 1
          cart.push({ ...product, quantity: 1 });
        }
    
        // Save the updated cart to localStorage
        localStorage.setItem("cart", JSON.stringify(cart));
      };





    return (
        <div className="product-detail">
            {/* Back Button */}
            <div className="back-button" onClick={handleBack}>
                <FontAwesomeIcon icon="fa-solid fa-arrow-left" className="back_icon" />
                <span>Back</span>
            </div>

            {/* Product Detail Section */}
            <div className="product-image"
                style={{ 
                    backgroundImage: `url(https://doubleshop.linkpc.net/endpoints/SanPham/image/download/${product.hinhAnhUrl})`,
                    backgroundSize: 'cover', 
                    backgroundPosition: 'center', 
                    height: '400px', 
                }} 
            ></div>
            <div className="product-info">
                <div className="product_hang1">
                    <h2>{product.tenSanPham}</h2>
                    <div className="price">₫ {product.gia.toLocaleString()}</div>
                </div>
                <div className="brand">Thương hiệu: {product.thuongHieu}</div>
                <p>{formatDescription(product.moTa)}</p>
                <div className="stock">Giảm giá: {product.soLuong}</div>
                <div className='soLuongThat'>Số lượng còn lại: {product.soLuongThat}</div>
                <div className='hinhanhurl'>Link review: <a href={product.linkYoutube}> Youtube</a></div>


                {/* <div className="Mua_ngay">
                    Mua Ngay
                    <FontAwesomeIcon icon={faCartShopping} />
                </div> */}

<div className="Mua_ngay">
        <Link to="/giohang" onClick={() => addToCart(product)}>
          Mua Ngay
          <FontAwesomeIcon icon={faCartShopping} />
        </Link>
      </div>
           
            </div>
        </div>
    );
};
export default ProductDetail;
