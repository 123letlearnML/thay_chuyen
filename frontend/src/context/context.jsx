import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

// Tạo context
const AuthContext = createContext();

// Hook để sử dụng context
export const useAuth = () => {
  return useContext(AuthContext);
};

// Provider chứa trạng thái makhachhang
export const AuthProvider = ({ children }) => {
  const [khachhang, setKhachhang] = useState(null); // Thông tin chi tiết khách hàng
  const [token, setToken] = useState(null);
  const [isLogin, setIsLogin] = useState(false);

  // Khôi phục trạng thái từ sessionStorage khi trang được tải lại
  useEffect(() => {
    const storedKhachhang = sessionStorage.getItem("khachhang");
    const storedToken = sessionStorage.getItem("token");

    if (storedKhachhang && storedToken) {
      setKhachhang(JSON.parse(storedKhachhang)); // Giải mã thông tin khách hàng
      setToken(storedToken);
      setIsLogin(true);
    }
  }, []); // Chỉ chạy khi trang được tải lại

  // Hàm đăng nhập, lưu makhachhang và thông tin khách hàng vào context và sessionStorage
  const login = async (khachhang, token) => {
    // Lưu thông tin khách hàng và token vào state và sessionStorage
    setKhachhang(khachhang);
    setToken(token);
    setIsLogin(true);

    // Lưu thông tin vào sessionStorage
    sessionStorage.setItem("khachhang", JSON.stringify(khachhang)); // Lưu toàn bộ thông tin khách hàng
    sessionStorage.setItem("token", token);
  };
  
  // Hàm đăng xuất, xóa makhachhang và thông tin khách hàng khỏi context và sessionStorage
  const logout = () => {
    setKhachhang(null);
    setToken(null);
    setIsLogin(false);

    // Xóa thông tin khỏi sessionStorage khi đăng xuất
    sessionStorage.removeItem("khachhang");
    sessionStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider value={{ setKhachhang, khachhang, token, isLogin, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
