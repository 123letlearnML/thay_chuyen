import React, { useState } from 'react';
import './changePassword.css'; // Đổi tên file CSS
import { useAuth } from '../context/context';

const ChangePassword = () => {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { khachhang, token,logout} = useAuth();
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Kiểm tra mật khẩu mới và xác nhận mật khẩu có trùng khớp không
    if (newPassword !== confirmPassword) {
      setErrorMessage('Mật khẩu mới và xác nhận mật khẩu không trùng khớp.');
      return;
    }

    // Kiểm tra mật khẩu mới phải đủ mạnh (ví dụ: dài hơn 6 ký tự)
    if (newPassword.length < 6) {
      setErrorMessage('Mật khẩu mới phải có ít nhất 6 ký tự.');
      return;
    }

    setIsLoading(true);
    setErrorMessage('');

    try {
      console.log(token,khachhang.maKhachHang);
      const requestData = {
        oldPassword: oldPassword,
        newPassword: newPassword,
        id: khachhang.maKhachHang, // Thay 'userId' bằng ID của người dùng nếu cần
      };

      const response = await fetch('https://doubleshop.linkpc.net/endpoints/changePassword', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`, // Thêm Bearer token vào header
        },
        body: JSON.stringify(requestData), // Gửi dữ liệu dưới dạng JSON
      });

      if (response.ok) {
        // Xử lý thành công
        alert('Mật khẩu đã được thay đổi thành công!');
        setTimeout(() => {
          logout();
          window.location.href = '/Login';  // Chuyển hướng về trang login
        }, 1000);
      } else {
        // Xử lý lỗi nếu yêu cầu không thành công
        const result = await response.json();
        setErrorMessage(result.message || 'Đổi mật khẩu thất bại.');
      }
    } catch (error) {
      console.error('Lỗi khi đổi mật khẩu:', error);
      setErrorMessage('Đã xảy ra lỗi. Vui lòng thử lại sau.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="change-password_changepassword-container">
      <h2>Đổi Mật Khẩu</h2>
      <form onSubmit={handleSubmit} className="change-password_changepassword-form">
        <div className="input-group_changepassword">
          <label htmlFor="oldPassword">Mật khẩu cũ:</label>
          <input
            type="password"
            id="oldPassword"
            value={oldPassword}
            onChange={(e) => setOldPassword(e.target.value)}
            required
          />
        </div>

        <div className="input-group_changepassword">
          <label htmlFor="newPassword">Mật khẩu mới:</label>
          <input
            type="password"
            id="newPassword"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />
        </div>

        <div className="input-group_changepassword">
          <label htmlFor="confirmPassword">Xác nhận mật khẩu mới:</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>

        {errorMessage && <p className="error-message_changepassword">{errorMessage}</p>}

        <div className="button-container_changepassword">
          <button type="submit" className="submit-button_changepassword" disabled={isLoading}>
            {isLoading ? 'Đang xử lý...' : 'Đổi mật khẩu'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ChangePassword;
