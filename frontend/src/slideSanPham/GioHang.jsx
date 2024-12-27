import React, { useState, useEffect } from "react";
import './GioHang.css';  // Import external CSS file

function GioHang() {
  const [cart, setCart] = useState([]);
  const [purchased, setPurchased] = useState([]);

  // Load cart and purchased items from localStorage
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    const savedPurchased = JSON.parse(localStorage.getItem("purchased")) || [];
    setCart(savedCart);
    setPurchased(savedPurchased);
  }, []);

  // Handle removing item from cart
  const handleRemoveItem = (id) => {
    const updatedCart = cart.filter(item => item.id !== id);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));  // Save updated cart
  };

  // Handle updating quantity in the cart
  const handleUpdateQuantity = (id, newQuantity, availableStock) => {
    if (newQuantity > availableStock) {
      alert(`Cannot purchase more than ${availableStock} of this product.`);
      return;
    }

    const updatedCart = cart.map(item =>
      item.id === id ? { ...item, quantity: newQuantity } : item
    );
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));  // Save updated cart
  };

  // Complete purchase (move items to purchased list and update stock)
  const handleCompletePurchase = () => {
    const updatedPurchased = [...purchased, ...cart];
    const updatedCart = [];

    // Loop through cart items and reduce the stock of each purchased item
    cart.forEach(item => {
      const remainingStock = item.soLuongThat - item.quantity;
      // Update the stock in the cart or database
      if (remainingStock >= 0) {
        item.soLuongThat = remainingStock; // Update available stock
      }
    });

    setPurchased(updatedPurchased);
    setCart(updatedCart);  // Clear the cart
    localStorage.setItem("cart", JSON.stringify([]));  // Clear cart in localStorage
    localStorage.setItem("purchased", JSON.stringify(updatedPurchased));  // Save purchased items to localStorage
    alert('Cảm ơn quý khách đã tin tưởng và mua hàng');
  };

  // Handle clearing purchase history
  const handleClearPurchaseHistory = () => {
    setPurchased([]);  // Clear the purchased items state
    localStorage.setItem("purchased", JSON.stringify([]));  // Clear purchased items from localStorage
    alert('Lịch sử mua hàng đã được xóa.');
  };

  return (
    <div className="giohang-container">
      <h2>Giỏ Hàng</h2>
      {cart.length > 0 ? (
        <div className="cart-container">
          <ul className="cart-items-list">
            {cart.map(item => (
              <li key={item.id} className="cart-item">
                <div className="item-details">
                  <h3 className="item-name">{item.tenSanPham}</h3>
                  <p className="item-price">Đơn giá: ₫ {item.gia.toLocaleString()}</p>
                  <p className="item-stock">Số lượng khả dụng: {item.soLuongThat}</p>
                  <p className="item-quantity">
                    Số lượng mua :
                    <input 
                      type="number" 
                      min="1" 
                      max={item.soLuongThat} 
                      value={item.quantity} 
                      onChange={(e) => handleUpdateQuantity(item.id, parseInt(e.target.value), item.soLuongThat)}
                      className="quantity-input"
                    />
                  </p>
                  <p className="item-total">Tổng: ₫ {(item.gia * item.quantity).toLocaleString()}</p>
                  <button className="remove-btn" onClick={() => handleRemoveItem(item.id)}>Xóa</button>
                </div>
              </li>
            ))}
          </ul>
          <button className="complete-purchase-btn" onClick={handleCompletePurchase}>Hoàn tất thanh toán</button>
        </div>
      ) : (
        <div className="empty-cart-message">Giỏ Hàng của bạn còn nhiều chỗ trống kìa HIHI ^^.</div>
      )}

      <h2>Các sản phẩm đã mua</h2>
      {purchased.length > 0 ? (
        <div>
          <ul className="purchased-items-list">
            {purchased.map(item => (
              <li key={item.id} className="purchased-item">
                <div className="purchased-item-details">
                  <h3 className="purchased-item-name">{item.tenSanPham}</h3>
                  <p className="purchased-item-price">Đơn Giá: ₫ {item.gia.toLocaleString()}</p>
                  <p className="purchased-item-quantity">Số Lượng: {item.quantity}</p>
                  <p className="purchased-item-total">Tổng: ₫ {(item.gia * item.quantity).toLocaleString()}</p>
                </div>
              </li>
            ))}
          </ul>
          <button className="clear-history-btn" onClick={handleClearPurchaseHistory}>Xóa lịch sử mua hàng</button>
        </div>
      ) : (
        <div className="no-purchased-message">Không có sản phẩm nào cả...</div>
      )}
    </div>
  );
}

export default GioHang;
