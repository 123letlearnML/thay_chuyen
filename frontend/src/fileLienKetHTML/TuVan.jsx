import React, { useState } from 'react';

const TuVan = () => {
  const [usage, setUsage] = useState('');
  const [budget, setBudget] = useState('');
  const [brand, setBrand] = useState('');
  const [successMessage, setSuccessMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  const [suggestions, setSuggestions] = useState('');
  
  const handleSubmit = (event) => {
    event.preventDefault();

    if (usage && budget && brand) {
      setSuccessMessage(true);
      setErrorMessage(false);
      
      let suggestion = '';

      if (usage === 'gaming' && budget === 'high') {
        suggestion = 'Chúng tôi gợi ý bạn nên chọn chiếc điện thoại Samsung Galaxy S23 Ultra hoặc iPhone 15 Pro Max với hiệu năng mạnh mẽ cho chơi game.';
      } else if (usage === 'photography' && budget === 'medium') {
        suggestion = 'Với ngân sách này, bạn có thể lựa chọn chiếc Xiaomi 12 Pro hoặc Oppo Reno8 Pro để có camera chất lượng cao.';
      } else if (usage === 'business' && budget === 'low') {
        suggestion = 'Nếu bạn đang tìm kiếm một điện thoại giá rẻ phục vụ công việc, chúng tôi gợi ý bạn chọn chiếc Samsung Galaxy A14 hoặc Realme Narzo 50A.';
      } else if (usage === 'gaming' && budget === 'medium') {
        suggestion = 'Với ngân sách trung bình, bạn có thể chọn chiếc Xiaomi Black Shark 4 hoặc Realme GT 2 Pro cho trải nghiệm chơi game mượt mà.';
      } else if (usage === 'gaming' && budget === 'low') {
        suggestion = 'Với ngân sách thấp, bạn có thể tham khảo Xiaomi Poco X3 Pro hoặc Samsung Galaxy A52 để chơi các game phổ biến.';
      } else if (usage === 'photography' && budget === 'high') {
        suggestion = 'Nếu bạn yêu thích chụp ảnh và có ngân sách cao, chúng tôi gợi ý bạn chiếc iPhone 15 Pro Max hoặc Samsung Galaxy S23 Ultra với camera chất lượng cao.';
      } else if (usage === 'photography' && budget === 'low') {
        suggestion = 'Với ngân sách thấp, bạn có thể lựa chọn chiếc Xiaomi Redmi Note 12 Pro hoặc Vivo Y73 với camera đủ tốt cho nhu cầu chụp ảnh hàng ngày.';
      } else if (usage === 'business' && budget === 'medium') {
        suggestion = 'Để phục vụ công việc, bạn có thể chọn chiếc Oppo Reno8 5G hoặc Vivo V25 5G với thiết kế sang trọng và hiệu suất tốt.';
      } else if (usage === 'business' && budget === 'high') {
        suggestion = 'Với ngân sách cao, chiếc iPhone 15 Pro hoặc Samsung Galaxy Z Fold 5 là lựa chọn tuyệt vời cho công việc và giải trí.';
      } else if (usage === 'general-use' && budget === 'high') {
        suggestion = 'Với ngân sách cao, bạn có thể chọn chiếc Samsung Galaxy Z Flip 5 hoặc iPhone 15 với những tính năng mạnh mẽ và thiết kế sang trọng.';
      } else if (usage === 'general-use' && budget === 'medium') {
        suggestion = 'Với ngân sách trung bình, chiếc Samsung Galaxy A54 5G hoặc Xiaomi Mi 12 là những sự lựa chọn phù hợp cho nhu cầu sử dụng hàng ngày.';
      } else if (usage === 'general-use' && budget === 'low') {
        suggestion = 'Với ngân sách thấp, bạn có thể tham khảo chiếc Samsung Galaxy A14 hoặc Realme Narzo 50A cho nhu cầu sử dụng cơ bản.';
      } else {
        suggestion = 'Chúng tôi sẽ tiếp tục tìm kiếm các gợi ý phù hợp hơn với nhu cầu của bạn.';
      }

      setSuggestions(suggestion);
    } else {
      setErrorMessage(true);
      setSuccessMessage(false);
    }
  };

  return (
    <div>
      <header style={{ backgroundColor: '#0044cc', color: '#fff', padding: '20px', textAlign: 'center' }}>
        <h1>Tư Vấn Điện Thoại Phù Hợp</h1>
        <p>Hãy trả lời vài câu hỏi để chúng tôi giúp bạn tìm điện thoại phù hợp nhất!</p>
      </header>

      <main style={{ maxWidth: '1200px', margin: '20px auto', padding: '20px' }}>
        <section style={{ backgroundColor: '#fff', padding: '30px', borderRadius: '8px', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)', marginBottom: '40px' }}>
          <h2 style={{ fontSize: '28px', textAlign: 'center', color: '#0044cc', marginBottom: '30px' }}>Câu Hỏi Tư Vấn</h2>
          <p>Chúng tôi sẽ giúp bạn tìm ra chiếc điện thoại phù hợp với nhu cầu và ngân sách của bạn. Hãy trả lời các câu hỏi dưới đây:</p>

          <form onSubmit={handleSubmit}>
            <label htmlFor="usage" style={{ display: 'block', fontSize: '16px', color: '#333', marginBottom: '10px' }}>Bạn chủ yếu sử dụng điện thoại để làm gì?</label>
            <select
              id="usage"
              name="usage"
              required
              value={usage}
              onChange={(e) => setUsage(e.target.value)}
              style={{ width: '100%', padding: '10px', marginBottom: '15px', border: '1px solid #ccc', borderRadius: '5px', fontSize: '16px' }}
            >
              <option value="">Chọn một mục</option>
              <option value="gaming">Chơi game</option>
              <option value="photography">Chụp ảnh</option>
              <option value="social-media">Lướt mạng xã hội</option>
              <option value="business">Công việc và học tập</option>
              <option value="general-use">Sử dụng hàng ngày</option>
            </select>

            <label htmlFor="budget" style={{ display: 'block', fontSize: '16px', color: '#333', marginBottom: '10px' }}>Ngân sách của bạn là bao nhiêu?</label>
            <select
              id="budget"
              name="budget"
              required
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
              style={{ width: '100%', padding: '10px', marginBottom: '15px', border: '1px solid #ccc', borderRadius: '5px', fontSize: '16px' }}
            >
              <option value="">Chọn ngân sách</option>
              <option value="low">Dưới 5 triệu</option>
              <option value="medium">Từ 5 đến 10 triệu</option>
              <option value="high">Trên 10 triệu</option>
            </select>

            <label htmlFor="brand" style={{ display: 'block', fontSize: '16px', color: '#333', marginBottom: '10px' }}>Bạn thích thương hiệu nào?</label>
            <select
              id="brand"
              name="brand"
              required
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
              style={{ width: '100%', padding: '10px', marginBottom: '15px', border: '1px solid #ccc', borderRadius: '5px', fontSize: '16px' }}
            >
              <option value="">Chọn thương hiệu</option>
              <option value="samsung">Samsung</option>
              <option value="apple">Apple</option>
              <option value="xiaomi">Xiaomi</option>
              <option value="oppo">Oppo</option>
              <option value="vivo">Vivo</option>
              <option value="realme">Realme</option>
            </select>

            <button
              type="submit"
              style={{ backgroundColor: '#0044cc', color: '#fff', border: 'none', padding: '12px 20px', fontSize: '18px', cursor: 'pointer', borderRadius: '5px' }}
            >
              Nhận Tư Vấn
            </button>
          </form>

          {successMessage && (
            <div style={{ backgroundColor: '#4CAF50', color: 'white', padding: '15px', marginTop: '20px', borderRadius: '5px', textAlign: 'center' }}>
              Cảm ơn bạn đã trả lời các câu hỏi! Dưới đây là gợi ý cho bạn:
            </div>
          )}

          {errorMessage && (
            <div style={{ backgroundColor: '#f44336', color: 'white', padding: '15px', marginTop: '20px', borderRadius: '5px', textAlign: 'center' }}>
              Đã xảy ra lỗi khi gửi yêu cầu. Vui lòng thử lại sau.
            </div>
          )}

          {suggestions && (
            <div style={{ marginTop: '20px' }}>
              <h3>Gợi Ý Điện Thoại Phù Hợp:</h3>
              <p>{suggestions}</p>
            </div>
          )}
        </section>
      </main>
    </div>
  );
};

export default TuVan;
