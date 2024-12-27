// ResetPassword.js
import React, { useState } from 'react';
import '../login/login.css'; // Bạn có thể sử dụng CSS từ trước đó
import './ResetPassword.css'
const ResetPassword = () => {
  const [userName, setUserName] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    // Thực hiện logic gửi yêu cầu reset mật khẩu ở đây, ví dụ gửi email
    try {
      const response = await fetch('https://doubleshop.linkpc.net/endpoints/reset-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userName: userName}),
      });

      const result = await response.text();
      if (response.ok) {
        setSuccess(`Password reset  sent to your email.${result}`);
        setTimeout(() => {
          window.location.href = '/Login';
        }, 1000);
      } else {
        setError(result.error || 'Reset failed. Please try again.');
      }
    } catch (err) {
      setError('An error occurred. Please try again later.');
    }
  };

  return (
    <div className="reset-password-container">
      <div className="reset-password-form">
        <h2>Reset Password</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              type="username"
              name="username"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              placeholder=""
              required
            />
            <label htmlFor="username">Username</label>
          </div>
          <button type="submit" className="reset-button">Send Reset Link</button>
        </form>
        {error && <p className="error-message">{error}</p>}
        {success && <p className="success-message">{success}</p>}
      </div>
    </div>
  );
};

export default ResetPassword;
