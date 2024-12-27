import React from 'react';

const DieuKhoanSuDung = () => {
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
        <h1 style={{ textAlign: 'center', color: '#2c3e50' }}>Điều khoản sử dụng của Double.d</h1>

        <div className="section" style={{ marginBottom: '20px' }}>
          <h2 style={{ color: '#16a085', marginTop: '20px' }}>1. Giới thiệu</h2>
          <p style={{ lineHeight: '1.6', fontSize: '16px' }}>
            Chào mừng bạn đến với Double.d! Khi bạn sử dụng dịch vụ của chúng tôi, bạn đồng ý tuân thủ các điều khoản và điều kiện được nêu dưới đây.
            Double.d cam kết bảo vệ quyền riêng tư và bảo mật thông tin của người dùng.
          </p>
        </div>

        <div className="section" style={{ marginBottom: '20px' }}>
          <h2 style={{ color: '#16a085', marginTop: '20px' }}>2. Quyền sử dụng dịch vụ</h2>
          <p style={{ lineHeight: '1.6', fontSize: '16px' }}>
            Bằng cách sử dụng Double.d, bạn xác nhận rằng bạn có quyền sử dụng dịch vụ của chúng tôi trên thiết bị di động của mình. Bạn không được phép
            sử dụng dịch vụ này cho các mục đích vi phạm pháp luật hoặc làm hại đến người khác.
          </p>
        </div>

        <div className="section" style={{ marginBottom: '20px' }}>
          <h2 style={{ color: '#16a085', marginTop: '20px' }}>3. Bảo mật và bảo vệ thông tin</h2>
          <p style={{ lineHeight: '1.6', fontSize: '16px' }}>
            Double.d cam kết bảo vệ thông tin cá nhân của bạn bằng các biện pháp bảo mật tiên tiến. Tuy nhiên, chúng tôi không thể đảm bảo an toàn tuyệt đối
            và bạn nên cẩn trọng khi chia sẻ thông tin cá nhân trên nền tảng của chúng tôi.
          </p>
        </div>

        <div className="section" style={{ marginBottom: '20px' }}>
          <h2 style={{ color: '#16a085', marginTop: '20px' }}>4. Quyền sở hữu trí tuệ</h2>
          <p style={{ lineHeight: '1.6', fontSize: '16px' }}>
            Tất cả các tài nguyên, nội dung và thiết kế trên Double.d đều thuộc quyền sở hữu của chúng tôi hoặc được cấp phép hợp pháp. Bạn không được sao chép,
            phân phối hoặc sử dụng trái phép các tài liệu này dưới bất kỳ hình thức nào.
          </p>
        </div>

        <div className="section" style={{ marginBottom: '20px' }}>
          <h2 style={{ color: '#16a085', marginTop: '20px' }}>5. Chính sách chấm dứt dịch vụ</h2>
          <p style={{ lineHeight: '1.6', fontSize: '16px' }}>
            Double.d có quyền tạm ngừng hoặc chấm dứt quyền truy cập của bạn nếu bạn vi phạm các điều khoản và điều kiện của chúng tôi. Trong trường hợp này,
            bạn sẽ không thể tiếp tục sử dụng dịch vụ cho đến khi được khôi phục quyền truy cập.
          </p>
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

export default DieuKhoanSuDung;
