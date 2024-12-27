import React, { useState } from "react";
import './DoiTac.css';  // Import file CSS

const DoiTac = () => {
  const [success, setSuccess] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault(); // Ngăn hành động mặc định (submit form)

    // Hiển thị thông báo thành công
    setSuccess(true);

    // Ẩn thông báo sau 5 giây
    setTimeout(() => {
      setSuccess(false);
    }, 5000);

    // Xóa dữ liệu form
    event.target.reset();
  };

  return (
    <div>
      <header>
        <h1>Double.D - Trở Thành Đối Tác Cùng Chúng Tôi</h1>
        <p>Chúng tôi luôn tìm kiếm những đối tác uy tín để cùng phát triển.</p>
      </header>

      <main>
        <section className="section-content">
          <h2 className="section-title">Lý Do Trở Thành Đối Tác Của Double.D</h2>
          <p>
            Chúng tôi tự hào là một trong những cửa hàng điện thoại hàng đầu,
            cung cấp những sản phẩm chất lượng, dịch vụ tận tâm và giá cả hợp
            lý. Hợp tác với chúng tôi sẽ mang đến cho bạn cơ hội:
          </p>
          <ul>
            <li>Tăng trưởng doanh thu bền vững.</li>
            <li>Nhận hỗ trợ từ đội ngũ chuyên gia trong ngành.</li>
            <li>Cung cấp sản phẩm chính hãng, bảo hành dài hạn.</li>
            <li>Mở rộng mạng lưới khách hàng và thị trường.</li>
          </ul>
        </section>

        <section className="section-content requirements">
          <h2>Yêu Cầu Để Trở Thành Đối Tác</h2>
          <p>
            Để hợp tác cùng Double.D, chúng tôi yêu cầu các đối tác phải đáp ứng
            các tiêu chí sau:
          </p>
          <ul>
            <li>
              Có ít nhất 2 năm kinh nghiệm trong ngành bán lẻ điện thoại hoặc
              các sản phẩm công nghệ.
            </li>
            <li>
              Có cơ sở vật chất và đội ngũ nhân viên chuyên nghiệp, tận tâm.
            </li>
            <li>Cam kết tuân thủ chính sách và các quy định của Double.D.</li>
            <li>
              Đảm bảo khả năng vận hành và cung cấp dịch vụ hỗ trợ khách hàng
              tốt.
            </li>
          </ul>
        </section>

        <section className="form-container">
          <h2 className="section-title">Đăng Ký Hợp Tác</h2>
          <p>
            Điền thông tin dưới đây để đăng ký trở thành đối tác của Double.D.
            Chúng tôi sẽ liên hệ với bạn trong thời gian sớm nhất.
          </p>

          <form id="partner-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Họ và tên</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Nhập họ tên của bạn"
              required
            />

            <label htmlFor="company">Tên công ty</label>
            <input
              type="text"
              id="company"
              name="company"
              placeholder="Nhập tên công ty của bạn"
              required
            />

            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Nhập email của bạn"
              required
            />

            <label htmlFor="phone">Số điện thoại</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Nhập số điện thoại"
              required
            />

            <label htmlFor="message">Lý do hợp tác</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              placeholder="Chia sẻ lý do bạn muốn hợp tác cùng chúng tôi"
              required
            ></textarea>

            <button type="submit">Đăng Ký Ngay</button>
          </form>

          {success && (
            <div className="success-message">
              Chúng tôi đã ghi nhận thông tin của bạn và sẽ liên hệ với bạn
              trong thời gian sớm nhất!
            </div>
          )}
        </section>
      </main>

      <footer>
        <p>&copy; 2024 Double.D. Tất cả quyền được bảo lưu.</p>
      </footer>
    </div>
  );
};

export default DoiTac;
