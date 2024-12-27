import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import './login.css';
import { useAuth } from "../context/context";

const LoginForm = () => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false); // Kiểm tra mật khẩu có hiển thị hay không
    const [isPasswordFocused, setIsPasswordFocused] = useState(false); // Kiểm tra xem ô mật khẩu có focus hay không
    const [error, setError] = useState(""); // Lưu thông báo lỗi
    const [success, setSuccess] = useState(""); // Lưu thông báo thành công
    const { login } = useAuth();  // Lấy hàm login từ context
    const [formData, setFormData] = useState({
      username: '',
      password: '',
    });
    const navigate = useNavigate();
    const togglePasswordVisibility = () => {
        setIsPasswordVisible(!isPasswordVisible);
    };
    const handleFocus = () => {
        setIsPasswordFocused(true);
    };

    const handleBlur = () => {
        if (formData.password === "") {
            setIsPasswordFocused(false);
        }
    };
    
    // Kiểm tra xem ô input có giá trị hay không
    const hasValue = formData.password.length > 0;
    
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      setError('');
      setSuccess('');
  
      try {
        const response = await fetch('https://doubleshop.linkpc.net/endpoints/req/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: new URLSearchParams(formData),
        });
  
        const result = await response.json();
        if (response.ok) {
          // Xử lý đăng nhập thành công
          setSuccess('Login successful!');
          const { khachhang, token } = result;
  
          // Lưu makhachhang và token vào context
          login(khachhang,token);

  
          // Chuyển hướng ngay lập tức sau khi đăng nhập thành công
          navigate('/');  // Chuyển hướng đến trang chủ hoặc bất kỳ trang nào bạn muốn
        } else {
          // Xử lý lỗi đăng nhập
          setError(result.error || 'Login failed. Please try again.');
        }
      } catch (err) {
        setError('An error occurred. Please try again later.');
      }
    };


    return (
        <div className="login">
            <img src="background_login.jpg" alt="login background" className="login__img" />

            <form onSubmit={handleSubmit} className="login__form">
                <h1 className="login__title">Login</h1>

                <div className="login__content">
                    <div className="login__box">
                        <i className="bx bx-user"></i>
                        <div className="login__box-input">
                            <input
                                type="text"
                                name="username"
                                required
                                className={`login__input ${formData.username ? 'has-value' : ''}`}
                                placeholder=""
                                value={formData.username}
                                onChange={handleInputChange}
                            />
                            <label htmlFor="username" className="login__label">
                                Username
                            </label>
                        </div>
                    </div>

                    <div className="login__box">
                        <i className="ri-lock-2-line login__icon"></i>
                        <div className="login__box-input">
                            <input
                                type={isPasswordVisible ? "text" : "password"}
                                required
                                name="password"
                                className={`login__input ${formData.password ? 'has-value' : ''}`}
                                id="login-pass"
                                placeholder=""
                                value={formData.password}
                                onChange={handleInputChange}
                                onFocus={handleFocus}
                                onBlur={handleBlur}
                            />
                            <label htmlFor="login-pass" className="login__label">
                                Password
                            </label>
                            {(formData.password || isPasswordFocused) && (
                                <i
                                    className={`ri-eye${isPasswordVisible ? "-line" : "-off-line"} login__eye`}
                                    onClick={togglePasswordVisibility}
                                ></i>
                            )}
                        </div>
                    </div>
                </div>

                {/* Hiển thị thông báo lỗi hoặc thành công */}
                {error && <p className="error-message">{error}</p>}
                {success && <p className="success-message">{success}</p>}

                <div className="login__check">
                    <div className="login__check-group">
                        <input type="checkbox" className="login__check-input" />
                        <label htmlFor="" className="login__check-label">
                            Remember me
                        </label>
                    </div>

                    <Link to="/reset-password" className="login__forgot">
                        Forgot Password?
                    </Link>
                </div>

                <button type="submit" className="login__button">
                    Login
                </button>

                <p className="login__register">
                    Don't have an account?{" "}
                    <Link to="/signup" className="login__register-link">
                        Register
                    </Link>
                </p>
            </form>
        </div>
    );
};

export default LoginForm;
