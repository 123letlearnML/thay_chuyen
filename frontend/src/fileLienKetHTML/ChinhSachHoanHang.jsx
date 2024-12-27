import React from 'react';
import './ChinhSachHoanHang.css';

const ChinhSachHoanHang = () => {
  return (
    <div className="policy-container">
      <header className="header">
        <div className="logo">
          <h1>Double.D Shop</h1>
          <p>Chính Sách Hoàn Hàng</p>
        </div>
      </header>

      <main className="main-content">
        <section className="policy-section">
          <h2>1. Điều Kiện Hoàn Hàng</h2>
          <p>
            Chúng tôi cam kết mang lại sự hài lòng cho khách hàng. Nếu bạn không hài lòng với sản phẩm, bạn có thể yêu cầu hoàn hàng trong vòng 14 ngày kể từ ngày nhận hàng.
          </p>
          <p>Điều kiện hoàn hàng:</p>
          <ul>
            <li>Sản phẩm chưa qua sử dụng và còn nguyên vẹn bao bì, nhãn mác.</li>
            <li>Hóa đơn mua hàng hoặc chứng từ liên quan phải được xuất trình.</li>
            <li>Sản phẩm không bị hư hại do người sử dụng.</li>
          </ul>
        </section>

        <section className="policy-section">
          <h2>2. Quy Trình Hoàn Hàng</h2>
          <p>Để yêu cầu hoàn hàng, vui lòng làm theo các bước sau:</p>
          <ol>
            <li>Liên hệ với bộ phận chăm sóc khách hàng qua điện thoại hoặc email trong vòng 14 ngày kể từ ngày nhận hàng.</li>
            <li>Chúng tôi sẽ yêu cầu bạn cung cấp thông tin sản phẩm, lý do hoàn trả và ảnh chụp sản phẩm.</li>
            <li>Sau khi kiểm tra thông tin, chúng tôi sẽ hướng dẫn bạn gửi trả sản phẩm qua đường bưu điện hoặc mang trực tiếp đến cửa hàng.</li>
            <li>Chúng tôi sẽ hoàn tiền trong vòng 5-7 ngày làm việc sau khi nhận được sản phẩm.</li>
          </ol>
        </section>

        <section className="policy-section">
          <h2>3. Sản Phẩm Không Được Hoàn Hàng</h2>
          <p>Để bảo vệ quyền lợi của cả khách hàng và cửa hàng, một số sản phẩm không thể hoàn trả. Cụ thể, những sản phẩm sau sẽ không được hoàn trả:</p>
          <ul>
            <li>Sản phẩm đã bị hư hỏng hoặc có dấu hiệu bị sửa chữa, thay thế linh kiện.</li>
            <li>Sản phẩm đã qua sử dụng hoặc không còn nguyên vẹn bao bì, nhãn mác.</li>
            <li>Thẻ SIM, phụ kiện như tai nghe, dây sạc đã được mở niêm phong hoặc sử dụng.</li>
            <li>Đơn hàng đã quá 14 ngày kể từ ngày nhận hàng.</li>
          </ul>
        </section>

        <section className="policy-section">
          <h2>4. Phương Thức Hoàn Tiền</h2>
          <p>Sau khi chấp nhận yêu cầu hoàn hàng, chúng tôi sẽ hoàn tiền theo một trong các phương thức sau:</p>
          <ul>
            <li>Hoàn tiền qua chuyển khoản ngân hàng.</li>
            <li>Hoàn tiền qua ví điện tử (nếu có).</li>
            <li>Hoàn tiền vào thẻ tín dụng nếu bạn đã thanh toán bằng thẻ.</li>
          </ul>
          <p>
            Quá trình hoàn tiền sẽ được thực hiện trong vòng 5-7 ngày làm việc. Trong trường hợp có sự cố hoặc sai sót, chúng tôi sẽ liên hệ và thông báo cho khách hàng kịp thời.
          </p>
        </section>

        <section className="policy-section">
          <h2>5. Điều Khoản và Điều Kiện</h2>
          <p>
            Cửa hàng điện thoại SmartPhone Store có quyền thay đổi chính sách hoàn hàng mà không cần thông báo trước. Tuy nhiên, những thay đổi này sẽ không ảnh hưởng đến các yêu cầu hoàn trả đã được chấp nhận trước đó.
          </p>
          <p>
            Chúng tôi cam kết bảo mật thông tin khách hàng và sử dụng các biện pháp bảo vệ thông tin cá nhân theo quy định của pháp luật.
          </p>
        </section>
      </main>

      <footer className="footer">
        <p>&copy; 2024 SmartPhone Store. Tất cả quyền được bảo lưu.</p>
      </footer>
    </div>
  );
};

export default ChinhSachHoanHang;
