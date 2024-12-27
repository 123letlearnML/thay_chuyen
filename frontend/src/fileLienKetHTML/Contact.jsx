import React from 'react';

const Contact = () => {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', margin: 0, padding: 0, backgroundColor: '#f4f4f4', color: '#333' }}>
      <div className="container" style={{
        width: '80%',
        margin: '30px auto',
        backgroundColor: '#fff',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)'
      }}>
        <h1 style={{ textAlign: 'center', color: '#2c3e50' }}>Liên hệ với Double.d</h1>

        <div className="section" style={{ marginBottom: '20px' }}>
          <h2 style={{ color: '#16a085', marginTop: '20px' }}>1. Chúng tôi ở đâu?</h2>
          <p style={{ lineHeight: '1.6', fontSize: '16px' }}>
            Double.d có trụ sở chính tại Hà Nội, Việt Nam. Chúng tôi luôn sẵn sàng đón tiếp và hỗ trợ khách hàng từ khắp nơi trên cả nước.
            Bạn có thể đến trực tiếp để trao đổi các vấn đề liên quan đến sản phẩm hoặc dịch vụ của chúng tôi.
          </p>
        </div>

        <div className="section" style={{ marginBottom: '20px' }}>
          <h2 style={{ color: '#16a085', marginTop: '20px' }}>2. Cách liên hệ qua Email</h2>
          <p style={{ lineHeight: '1.6', fontSize: '16px' }}>
            Để liên hệ với đội ngũ hỗ trợ khách hàng của Double.d, bạn có thể gửi email cho chúng tôi qua địa chỉ
            <strong> support@double-d.com</strong>. Chúng tôi cam kết sẽ phản hồi tất cả các email trong vòng 24 giờ làm việc. Hãy mô tả rõ vấn đề
            hoặc câu hỏi của bạn để chúng tôi có thể hỗ trợ nhanh chóng và chính xác nhất.
          </p>
        </div>

        <div className="section" style={{ marginBottom: '20px' }}>
          <h2 style={{ color: '#16a085', marginTop: '20px' }}>3. Gọi điện thoại hỗ trợ</h2>
          <p style={{ lineHeight: '1.6', fontSize: '16px' }}>
            Chúng tôi cung cấp dịch vụ hỗ trợ qua điện thoại cho khách hàng vào giờ hành chính. Bạn có thể gọi vào số
            <strong> +84 123 456 789</strong> để nhận sự hỗ trợ trực tiếp từ đội ngũ chăm sóc khách hàng của chúng tôi. Đội ngũ của chúng tôi sẽ
            sẵn sàng giải đáp các thắc mắc và giúp bạn giải quyết các vấn đề nhanh chóng.
          </p>
        </div>

        <div className="section" style={{ marginBottom: '20px' }}>
          <h2 style={{ color: '#16a085', marginTop: '20px' }}>4. Liên hệ qua Mạng xã hội</h2>
          <p style={{ lineHeight: '1.6', fontSize: '16px' }}>
            Double.d cũng rất tích cực trên các nền tảng mạng xã hội. Bạn có thể theo dõi chúng tôi và liên hệ qua các kênh dưới đây để nhận được
            thông tin mới nhất và hỗ trợ kịp thời:
          </p>
          <div className="contact-info" style={{
            backgroundColor: '#ecf0f1',
            padding: '20px',
            borderRadius: '5px',
            marginTop: '10px'
          }}>
            <p><strong>Facebook:</strong> <a href="https://www.facebook.com/double.d" target="_blank" rel="noopener noreferrer">facebook.com/double.d</a></p>
            <p><strong>Instagram:</strong> <a href="https://www.instagram.com/double.d" target="_blank" rel="noopener noreferrer">instagram.com/double.d</a></p>
            <p><strong>Twitter:</strong> <a href="https://twitter.com/double_d" target="_blank" rel="noopener noreferrer">twitter.com/double_d</a></p>
          </div>
        </div>

        <div className="footer" style={{
          textAlign: 'center',
          fontSize: '14px',
          color: '#7f8c8d',
          marginTop: '30px'
        }}>
          <p>© 2024 Double.d. Tất cả quyền được bảo lưu.</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
