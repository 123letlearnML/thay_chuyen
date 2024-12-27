// import React, { useState } from 'react';
// import './signup.css';
//
// const SignupForm = () => {
//   const [formData, setFormData] = useState({
//     username: '',
//     email: '',
//     password: '',
//     confirmPassword: '',  // Thêm trường xác nhận mật khẩu
//   });
//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState('');
//
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };
//
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError('');
//     setSuccess('');
//
//     // Kiểm tra các trường không được trống
//     if (!formData.username || !formData.email || !formData.password || !formData.confirmPassword) {
//       setError('All fields are required');
//       return;
//     }
//
//     // Kiểm tra nếu mật khẩu và confirm password không khớp
//     if (formData.password !== formData.confirmPassword) {
//       setError('Passwords do not match');
//       return;
//     }
//
//     try {
//       const response = await fetch('https://doubleshop.linkpc.net/endpoints/req/signup', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           ten: formData.username,
//           email: formData.email,
//           matKhau: formData.password,
//         }),
//       });
//
//       const result = await response.json();
//       if (response.ok) {
//         setSuccess('Signup successful!');
//         // Chuyển hướng đến trang login sau khi đăng ký thành công
//         setTimeout(() => {
//           window.location.href = '/Login';  // Chuyển hướng về trang login
//         }, 1000);
//       } else {
//         setError(result.error || 'Signup failed. Please try again.');
//       }
//     } catch (err) {
//       setError('An error occurred. Please try again later.');
//     }
//   };
//
//   return (
//     <div>
//     <img src="background_signup.webp" className="img_signup" alt="Background" />
//     <div className="auth-container">
//       <h2>Sign Up</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="input-group">
//           <input
//             type="email"
//             id="email"
//             name="email"
//             value={formData.email}
//             onChange={handleInputChange}
//             placeholder=" "
//             required
//           />
//           <label htmlFor="email">Email</label>
//         </div>
//         <div className="input-group">
//           <input
//             type="text"
//             id="username"
//             name="username"
//             value={formData.username}
//             onChange={handleInputChange}
//             placeholder=" "
//             required
//           />
//           <label htmlFor="username">Username</label>
//         </div>
//         <div className="input-group">
//           <input
//             type="password"
//             id="password"
//             name="password"
//             value={formData.password}
//             onChange={handleInputChange}
//             placeholder=" "
//             required
//           />
//           <label htmlFor="password">Password</label>
//         </div>
//         <div className="input-group">
//           <input
//             type="password"
//             id="confirmPassword"
//             name="confirmPassword"
//             value={formData.confirmPassword}
//             onChange={handleInputChange}
//             placeholder=" "
//             required
//           />
//           <label htmlFor="confirmPassword">Confirm Password</label>
//         </div>
//         <button type="submit" className="auth-button">Sign Up</button>
//       </form>
//       {error && <p className="error-message">{error}</p>}
//       {success && <p className="success-message">{success}</p>}
//     </div>
//   </div>
//
//   );
// };
//
// export default SignupForm;
import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link từ react-router-dom
import './signup.css';

const SignupForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',  // Thêm trường xác nhận mật khẩu
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

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

    // Kiểm tra các trường không được trống
    if (!formData.username || !formData.email || !formData.password || !formData.confirmPassword) {
      setError('All fields are required');
      return;
    }

    // Kiểm tra nếu mật khẩu và confirm password không khớp
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      const response = await fetch('https://doubleshop.linkpc.net/endpoints/req/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: formData.username,
          email: formData.email,
          matKhau: formData.password,
        }),
      });

      const result = await response.json();
      if (response.ok) {
        setSuccess('Signup successful!');
        // Chuyển hướng đến trang login sau khi đăng ký thành công
        setTimeout(() => {
          window.location.href = '/Login';  // Chuyển hướng về trang login
        }, 1000);
      } else {
        setError(result.error || 'Signup failed. Please try again.');
      }
    } catch (err) {
      setError('An error occurred. Please try again later.');
    }
  };

  return (
      <div>
        <img src="background_signup.webp" className="img_signup" alt="Background" />
        <div className="auth-container">
          <h2>Sign Up</h2>
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder=" "
                  required
              />
              <label htmlFor="email">Email</label>
            </div>
            <div className="input-group">
              <input
                  type="text"
                  id="username"
                  name="username"
                  value={formData.username}
                  onChange={handleInputChange}
                  placeholder=" "
                  required
              />
              <label htmlFor="username">Username</label>
            </div>
            <div className="input-group">
              <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder=" "
                  required
              />
              <label htmlFor="password">Password</label>
            </div>
            <div className="input-group">
              <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  placeholder=" "
                  required
              />
              <label htmlFor="confirmPassword">Confirm Password</label>
            </div>
            <button type="submit" className="auth-button">Sign Up</button>
          </form>
          {error && <p className="error-message">{error}</p>}
          {success && <p className="success-message">{success}</p>}

          {/* Thêm phần đăng nhập ở dưới cùng */}
          <p className="signup__login">
            Already have an account?
            <Link to="/Login" className="signup__login-link">Login</Link>
          </p>
        </div>
      </div>
  );
};

export default SignupForm;
