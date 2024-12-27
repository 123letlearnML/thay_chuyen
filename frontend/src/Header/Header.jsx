import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // Import Link
import "./Header.css";
import { useAuth } from "../context/context";
import UserProfile from "../UserProFile/UserProFile";

function Header() {
  const { isLogin, logout, khachhang } = useAuth(); // Lấy trạng thái và hàm logout từ context
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    // Lấy số lượng sản phẩm từ giỏ hàng trong localStorage
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartCount(cart.length);
  }, []);

  return (
    <div className="navbar">
      <div className="navbar-left">
        <Link to="/" className="nav-link">
          <h3>Trang Chủ</h3>
        </Link>
        <Link to="/giohang" className="nav-link">
          <h3>Giỏ Hàng ({cartCount})</h3>
        </Link>
        <Link to="/LienHeAdmin" className="nav-link">
          <h3>Liên Hệ</h3>
        </Link>
        <Link to="/GioiThieu" className="nav-link">
          <h3>Giới Thiệu</h3>
        </Link>
      </div>

      <div className="navbar-right">
        {isLogin ? (
          <UserProfile userName={khachhang.ten} onLogout={logout} />
        ) : (
          <>
            <Link to="/Login" className="nav-link">
              <h3>Đăng Nhập</h3>
            </Link>
            <Link to="/Signup" className="nav-link">
              <h3>Đăng Ký</h3>
            </Link>
          </>
        )}
      </div>
    </div>
  );
}

export default Header;
