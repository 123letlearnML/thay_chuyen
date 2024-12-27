import React, { useState } from 'react';

const LienHeAdmin = () => {
  const [successMessage, setSuccessMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    // Kiểm tra thông tin và hiển thị thông báo thành công
    if (event.target.checkValidity()) {
      setSuccessMessage(true);
      setErrorMessage(false);

      // Sau 5 giây, ẩn thông báo đi
      setTimeout(() => setSuccessMessage(false), 5000);

      // Xóa dữ liệu form (tuỳ chọn)
      event.target.reset();
    } else {
      // Nếu có lỗi, hiển thị thông báo lỗi
      setErrorMessage(true);
    }
  };

  return (
    <div>
      <header style={styles.header}>
        <h1>Liên Hệ Đội Ngũ Hỗ Trợ Khách Hàng</h1>
        <p>
          Chúng tôi sẵn sàng hỗ trợ bạn giải quyết các vấn đề phát sinh liên quan
          đến sản phẩm hoặc dịch vụ của chúng tôi.
        </p>
      </header>

      <main style={styles.main}>
        <section style={styles.sectionContent}>
          <h2 style={styles.sectionTitle}>Các Vấn Đề Thường Gặp</h2>
          <p>
            Chúng tôi luôn cố gắng mang đến cho khách hàng dịch vụ hoàn hảo. Tuy
            nhiên, nếu bạn gặp phải bất kỳ vấn đề nào, hãy liên hệ với chúng tôi
            ngay để được hỗ trợ.
          </p>
          <ul>
            <li>Vấn đề sản phẩm bị hư hỏng hoặc lỗi kỹ thuật.</li>
            <li>Yêu cầu bảo hành hoặc thay thế sản phẩm.</li>
            <li>Các vấn đề liên quan đến thanh toán hoặc vận chuyển.</li>
            <li>Câu hỏi về chính sách đổi trả, bảo hành.</li>
          </ul>
        </section>

        <section style={styles.sectionContent}>
          <h2 style={styles.sectionTitle}>Gửi Yêu Cầu Hỗ Trợ</h2>
          <p>
            Vui lòng điền thông tin và mô tả vấn đề của bạn. Đội ngũ hỗ trợ của
            chúng tôi sẽ liên hệ với bạn trong thời gian sớm nhất.
          </p>

          <div style={styles.formContainer}>
            <form onSubmit={handleSubmit}>
              <label htmlFor="name">Họ và tên</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Nhập họ tên của bạn"
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

              <label htmlFor="issue">Mô tả vấn đề</label>
              <textarea
                id="issue"
                name="issue"
                rows="4"
                placeholder="Mô tả chi tiết vấn đề bạn gặp phải"
                required
              />

              <button type="submit">Gửi Yêu Cầu</button>
            </form>

            {successMessage && (
              <div style={styles.successMessage}>
                Chúng tôi đã ghi nhận yêu cầu của bạn và sẽ liên hệ với bạn sớm
                nhất!
              </div>
            )}

            {errorMessage && (
              <div style={styles.errorMessage}>
                Đã xảy ra lỗi khi gửi yêu cầu. Vui lòng thử lại sau.
              </div>
            )}
          </div>
        </section>
      </main>

      <footer style={styles.footer}>
        <p>&copy; 2024 Double.D. Tất cả quyền được bảo lưu.</p>
      </footer>
    </div>
  );
};

// Styles
const styles = {
  header: {
    backgroundColor: '#0044cc',
    color: '#fff',
    padding: '20px',
    textAlign: 'center',
  },
  main: {
    maxWidth: '1200px',
    margin: '20px auto',
    padding: '20px',
  },
  sectionContent: {
    backgroundColor: '#fff',
    padding: '30px',
    borderRadius: '8px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    marginBottom: '40px',
  },
  sectionTitle: {
    fontSize: '28px',
    textAlign: 'center',
    color: '#0044cc',
    marginBottom: '30px',
  },
  formContainer: {
    backgroundColor: '#e7f3fe',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
  },
  successMessage: {
    backgroundColor: '#4CAF50',
    color: 'white',
    padding: '15px',
    marginTop: '20px',
    borderRadius: '5px',
    textAlign: 'center',
  },
  errorMessage: {
    backgroundColor: '#f44336',
    color: 'white',
    padding: '15px',
    marginTop: '20px',
    borderRadius: '5px',
    textAlign: 'center',
  },
  footer: {
    backgroundColor: '#0044cc',
    color: '#fff',
    textAlign: 'center',
    padding: '10px',
    marginTop: '40px',
  },
};

export default LienHeAdmin;
