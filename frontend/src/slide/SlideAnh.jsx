import React from 'react';
import './SlideAnh.css'; // Đảm bảo bạn có file CSS phù hợp

function SlideAnh() {
  return (
    <div className="slider-container">
      <div className="slider">
        <img src="getThuongHieu1.png" alt="Image 1" className='anh1' />
    
      </div>


      <div className='slider_vanban'>
        <h1>Cam kết các sản phẩm của Double.D shop </h1>
        <ul>
            <li>Luôn cập nhật sớm nhất</li>
            <li>Giá cả phải chăng nhất</li>
            <li>Uy tín, bảo mật thông tin khách hàng nhất</li>
            <li>Bảo hành, tư vấn nhiệt tình nhất</li>
        </ul>
        <h2>Rất hân hạnh phục vụ !!</h2>
      </div>
    </div>
  );
}

export default SlideAnh;
