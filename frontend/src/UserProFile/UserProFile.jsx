import React, { useState } from 'react';
import { RiUserFill } from 'react-icons/ri'; // Biểu tượng người dùng từ React Icons
import { RiLogoutBoxLine } from 'react-icons/ri'; // Biểu tượng logout từ React Icons
import { Link } from 'react-router-dom'; // Import Link từ React Router
import './userProfile.css'; // Thêm CSS cho giao diện

const UserProfile = ({ userName, onLogout }) => {
  // State để điều khiển dropdown menu
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Hàm toggle dropdown
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  return (
    <div className="user-profile">
      {/* Cặp avatar và tên người dùng xếp theo chiều dọc */}
      <div className="user-details">
        <button className="user-logo-btn" onClick={toggleDropdown}>
          <RiUserFill className="user-logo" />
        </button>
        <span className="user-name">{userName}</span>

        {/* Dropdown menu */}
        {isDropdownOpen && (
          <div className="dropdown-menu">
            <Link to="/Information" className="dropdown-item">Thông Tin</Link>
            <Link to="/ChangePassword" className="dropdown-item">Đổi Mật Khẩu</Link>
          </div>
        )}
      </div>

      {/* Nút logout */}
      <button className="logout-btn" onClick={onLogout}>
        <RiLogoutBoxLine className="logout-icon" /> {/* Biểu tượng logout */}
      </button>
    </div>
  );
};

export default UserProfile;
