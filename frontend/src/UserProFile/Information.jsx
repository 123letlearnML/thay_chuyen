import React, { useState, useEffect } from 'react';
import './Information.css';
import { useAuth } from '../context/context';

const Information = () => {
  const { khachhang, setKhachhang, token } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    id: khachhang ? khachhang.id : '',  // Thêm id vào formData
    ten: khachhang ? khachhang.ten : '',
    email: khachhang ? khachhang.email : '',
    soDienThoai: khachhang ? khachhang.soDienThoai : '',
    diaChiGiaoHang: khachhang ? khachhang.diaChiGiaoHang : '',
  });

  const [editingField, setEditingField] = useState(null); // Trường đang được chỉnh sửa

  useEffect(() => {
    if (khachhang) {
      setFormData({ // Thêm id vào formData
        ten: khachhang.ten,
        email: khachhang.email,
        soDienThoai: khachhang.soDienThoai,
        diaChiGiaoHang: khachhang.diaChiGiaoHang,
      });
    }
  }, [khachhang]);

  // Hàm xử lý thay đổi giá trị trong form
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Hàm xử lý lưu thông tin sau khi người dùng cập nhật
  const handleSave = async () => {
    try {
      console.log(token,khachhang.maKhachHang)
      const data = {
        id: khachhang.maKhachHang,
        ten: formData.ten,
        email: formData.email,
        soDienThoai: formData.soDienThoai,
        diaChiGiaoHang: formData.diaChiGiaoHang,
      }
      console.log(formData.ten,formData.email,formData.soDienThoai,formData.diaChiGiaoHang)
      const response = await fetch('https://doubleshop.linkpc.net/endpoints/updateKhachHang', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(data),
      });
  
      if (response.ok) {
        // Nếu yêu cầu thành công, lấy phản hồi dưới dạng chuỗi
        const result = await response.text();  // Lấy nội dung trả về dưới dạng chuỗi
        
        if (result === 'successful') {

          // Nếu trả về "successful", cập nhật lại thông tin
          setKhachhang(formData);  // formData chứa thông tin đã cập nhật
          sessionStorage.setItem('khachhang', JSON.stringify(formData));
          setIsEditing(false);
          setEditingField(null); // Reset trường đang chỉnh sửa
          setTimeout(() => {
            window.location.href = '/';  // Chuyển hướng về trang login
          }, 3000);
        } else {
          console.error('Update failed:', result);
        }
      } else {
        console.error('Failed to update user information:', response.statusText);
      }
    } catch (error) {
      console.error('Error updating user information:', error);
    }
  };
  
  // Hàm xử lý chuyển sang chế độ chỉnh sửa cho từng trường
  const handleEditField = (field) => {
    setEditingField(field);
    setIsEditing(true);
  };

  if (!khachhang) {
    return <div>Vui lòng đăng nhập để xem thông tin.</div>;
  }

  return (
    <div className="information-container">
      <h2 className="information-title">Thông tin người dùng</h2>

      <div className="information-item">
        <strong>Tên:</strong>
        {editingField === 'ten' ? (
          <input
            type="text"
            name="ten"
            value={formData.ten}
            onChange={handleInputChange}
            className="input-field"
          />
        ) : (
          <span>{formData.ten}</span>
        )}
        <button className="edit-button" onClick={() => handleEditField('ten')}>
          ✏️
        </button>
      </div>

      <div className="information-item">
        <strong>Email:</strong>
        {editingField === 'email' ? (
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="input-field"
          />
        ) : (
          <span>{formData.email}</span>
        )}
        <button className="edit-button" onClick={() => handleEditField('email')}>
          ✏️
        </button>
      </div>

      <div className="information-item">
        <strong>Số điện thoại:</strong>
        {editingField === 'soDienThoai' ? (
          <input
            type="text"
            name="soDienThoai"
            value={formData.soDienThoai}
            onChange={handleInputChange}
            className="input-field"
          />
        ) : (
          <span>{formData.soDienThoai}</span>
        )}
        <button className="edit-button" onClick={() => handleEditField('soDienThoai')}>
          ✏️
        </button>
      </div>

      <div className="information-item">
        <strong>Địa chỉ giao hàng:</strong>
        {editingField === 'diaChiGiaoHang' ? (
          <input
            type="text"
            name="diaChiGiaoHang"
            value={formData.diaChiGiaoHang}
            onChange={handleInputChange}
            className="input-field"
          />
        ) : (
          <span>{formData.diaChiGiaoHang}</span>
        )}
        <button className="edit-button" onClick={() => handleEditField('diaChiGiaoHang')}>
          ✏️
        </button>
      </div>

      {/* Hiển thị nút lưu thông tin khi ở chế độ chỉnh sửa */}
      {isEditing && (
        <div className="button-container">
          <button className="update-button" onClick={handleSave}>
            Lưu thông tin
          </button>
        </div>
      )}
    </div>
  );
};

export default Information;
