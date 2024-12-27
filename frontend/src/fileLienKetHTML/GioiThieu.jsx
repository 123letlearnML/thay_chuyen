import React from "react";
// Assuming styles are extracted into an external CSS file

const GioiThieu = () => {
  return (
    <div>
      <header style={styles.header}>
        <h1>Double.D - Cửa Hàng Điện Thoại Uy Tín</h1>
      </header>

      <section style={styles.section}>
        <h2 style={styles.heading}>Giới Thiệu Về Double.D</h2>
        <p style={styles.paragraph}>
          Double.D là cửa hàng chuyên cung cấp các sản phẩm điện thoại chính hãng với chất lượng vượt trội, dịch vụ hoàn hảo và giá cả hợp lý. Chúng tôi không chỉ chú trọng đến việc bán sản phẩm mà còn luôn lắng nghe và đáp ứng nhu cầu của khách hàng một cách tốt nhất. Với hơn 10 năm kinh nghiệm trong ngành, Double.D cam kết sẽ là đối tác đáng tin cậy của bạn trong việc lựa chọn các thiết bị điện tử. Tại Double.D, bạn sẽ được trải nghiệm mua sắm thuận tiện, với nhiều ưu đãi hấp dẫn và dịch vụ sau bán hàng tuyệt vời.
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.heading}>Lý Do Chọn Double.D</h2>
        <p style={styles.paragraph}>
          Chọn Double.D là bạn đang chọn cho mình một đối tác đáng tin cậy trong việc mua sắm điện thoại và các thiết bị điện tử. Chúng tôi cam kết cung cấp những sản phẩm chính hãng, đảm bảo chất lượng tuyệt đối. Mỗi sản phẩm tại cửa hàng đều được kiểm tra kỹ lưỡng trước khi đến tay khách hàng. Chúng tôi luôn cập nhật những mẫu điện thoại mới nhất, đáp ứng nhu cầu sử dụng của người tiêu dùng.
        </p>
        <p style={styles.paragraph}>
          Ngoài ra, đội ngũ nhân viên của chúng tôi luôn tận tâm và sẵn sàng tư vấn cho khách hàng những lựa chọn phù hợp với nhu cầu và sở thích cá nhân. Bạn sẽ không bao giờ cảm thấy bị bỏ qua, bởi chúng tôi luôn đặt khách hàng lên hàng đầu. Đặc biệt, chúng tôi còn cung cấp dịch vụ bảo hành dài hạn, hỗ trợ khách hàng trong suốt quá trình sử dụng sản phẩm. Chính vì những lý do này, Double.D luôn là sự lựa chọn ưu tiên của nhiều khách hàng.
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.heading}>Dịch Vụ Của Chúng Tôi</h2>
        <p style={styles.paragraph}>
          Tại Double.D, chúng tôi không chỉ cung cấp các sản phẩm điện thoại chất lượng mà còn đi kèm với các dịch vụ chăm sóc khách hàng vượt trội. Đầu tiên, bạn sẽ được tư vấn nhiệt tình bởi đội ngũ nhân viên chuyên nghiệp, giúp bạn tìm ra sản phẩm phù hợp nhất với nhu cầu sử dụng. Chúng tôi luôn đảm bảo rằng mọi sản phẩm đều được cung cấp với giá cả hợp lý nhất trên thị trường, đồng thời chúng tôi cũng cung cấp các chương trình khuyến mãi thường xuyên để khách hàng có thể tiết kiệm chi phí khi mua sắm.
        </p>
        <p style={styles.paragraph}>
          Bên cạnh đó, chúng tôi còn cung cấp dịch vụ sửa chữa điện thoại chuyên nghiệp với đội ngũ kỹ thuật viên giàu kinh nghiệm. Các thiết bị của bạn sẽ được kiểm tra và sửa chữa nhanh chóng, an toàn. Nếu cần thay thế linh kiện, chúng tôi chỉ sử dụng linh kiện chính hãng, đảm bảo độ bền và hiệu suất lâu dài. Đặc biệt, khách hàng sẽ được hưởng chế độ bảo hành lâu dài cho tất cả các sản phẩm và dịch vụ của chúng tôi, giúp bạn yên tâm sử dụng sản phẩm mà không phải lo lắng về vấn đề hậu mãi.
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.heading}>Hình Ảnh Cửa Hàng</h2>
        <div style={styles.images}>
          <a href="anh_shop1.jpg">
            <img src="anh_shop1.jpg" alt="Cửa hàng 1" style={styles.image} />
          </a>
          <a href="anh_shop2.jpg">
            <img src="anh_shop2.jpg" alt="Cửa hàng 2" style={styles.image} />
          </a>
          <a href="anh_shop3.jpg">
            <img src="anh_shop3.jpg" alt="Cửa hàng 3" style={styles.image} />
          </a>
        </div>
      </section>

      <section style={styles.contact}>
        <h2>Liên Hệ Với Chúng Tôi</h2>
        <p>
          Bạn cần thêm thông tin hoặc muốn tư vấn trực tiếp? Đừng ngần ngại, hãy liên hệ với chúng tôi ngay hôm nay! Chúng tôi luôn sẵn sàng để hỗ trợ bạn.
        </p>
        <a href="tel:+123456789" style={styles.contactLink}>
          Gọi Ngay
        </a>
      </section>

      <footer style={styles.footer}>
        <p>&copy; 2024 Double.D - Cửa Hàng Điện Thoại Chính Hãng</p>
      </footer>
    </div>
  );
};

const styles = {
  header: {
    backgroundColor: "#1f2a3d",
    color: "white",
    textAlign: "center",
    padding: "40px 0",
  },
  section: {
    padding: "50px 20px",
    margin: "20px 0",
    backgroundColor: "white",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  heading: {
    fontSize: "2.5em",
    color: "#1f2a3d",
    textAlign: "center",
    marginBottom: "20px",
  },
  paragraph: {
    fontSize: "1.2em",
    lineHeight: "1.6",
    color: "#555",
    maxWidth: "900px",
    margin: "0 auto",
    textAlign: "justify",
  },
  images: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
  },
  image: {
    width: "300px",
    height: "200px",
    objectFit: "cover",
    borderRadius: "8px",
  },
  contact: {
    textAlign: "center",
    padding: "40px",
    backgroundColor: "#ffffff",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  contactLink: {
    color: "#1f2a3d",
    fontSize: "1.2em",
    textDecoration: "none",
    padding: "10px 20px",
    border: "2px solid #1f2a3d",
    borderRadius: "5px",
    transition: "background-color 0.3s",
  },
  footer: {
    backgroundColor: "#1f2a3d",
    color: "white",
    textAlign: "center",
    padding: "20px 0",
  },
};

export default GioiThieu;
