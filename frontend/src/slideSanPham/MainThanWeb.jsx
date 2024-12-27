import React from 'react';
import { Route, Routes } from 'react-router-dom';  // Không cần import BrowserRouter ở đây nữa
import ProductList from './ProductList';
import ProductDetail from './ProductDetail';
import GioHang from './GioHang';
import Header from '../Header/Header';

const MainThanWeb = () => {
    return (
        <>
            <Header />
            <Routes>  {/* Sử dụng Routes trong đây */}
                <Route path="/" element={<ProductList />} />
                <Route path="/product-detail/:id" element={<ProductDetail />} />
                <Route path="/product/:id" element={<ProductDetail />} />
                <Route path="/giohang" element={<GioHang />} />
            </Routes>
        </>
    );
};

export default MainThanWeb;
