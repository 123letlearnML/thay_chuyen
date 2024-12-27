import React from "react";
import "./ChinhSachBaoMat.css"; // Import file CSS

const ChinhSachBaoMat = () => {
    return (
        <div className="body">
            <div className="container">
                <h1>Chính Sách Bảo Mật</h1>

                {/* Phần 1: Giới thiệu */}
                <div className="section">
                    <h2>1. Giới Thiệu</h2>
                    <p>
                        Chúng tôi tôn trọng quyền riêng tư của bạn và cam kết bảo vệ thông tin cá nhân. Chính sách bảo mật này mô tả cách chúng tôi thu thập, sử dụng và bảo vệ dữ liệu của bạn khi bạn truy cập vào website hoặc sử dụng các dịch vụ của chúng tôi.
                    </p>
                </div>

                {/* Phần 2: Thông Tin Thu Thập */}
                <div className="section">
                    <h2>2. Thông Tin Chúng Tôi Thu Thập</h2>
                    <p>
                        Chúng tôi thu thập thông tin mà bạn cung cấp trực tiếp, chẳng hạn như khi bạn đăng ký sử dụng dịch vụ, và thông tin thu thập tự động như cookies và dữ liệu sử dụng. Điều này giúp chúng tôi cải thiện trải nghiệm của bạn và cá nhân hóa dịch vụ.
                    </p>
                </div>

                {/* Phần 3: Cách Chúng Tôi Sử Dụng Thông Tin */}
                <div className="section">
                    <h2>3. Cách Chúng Tôi Sử Dụng Thông Tin</h2>
                    <p>
                        Dữ liệu của bạn giúp chúng tôi cung cấp và cải thiện dịch vụ, cá nhân hóa trải nghiệm của bạn, và liên lạc với bạn. Chúng tôi có thể sử dụng dữ liệu của bạn cho các mục đích tiếp thị, nhưng chỉ khi có sự đồng ý của bạn.
                    </p>
                </div>

                {/* Phần 4: Bảo Vệ Dữ Liệu và Quyền Lợi của Bạn */}
                <div className="section">
                    <h2>4. Bảo Vệ Dữ Liệu và Quyền Lợi của Bạn</h2>
                    <p>
                        Chúng tôi bảo vệ thông tin của bạn bằng các biện pháp hợp lý để tránh việc truy cập trái phép hoặc sử dụng sai mục đích. Bạn có quyền truy cập, chỉnh sửa, hoặc xóa dữ liệu cá nhân của mình. Nếu có bất kỳ thắc mắc nào, vui lòng liên hệ với chúng tôi qua thông tin liên hệ bên dưới.
                    </p>
                </div>

                <footer>
                    <p>
                        Để biết thêm chi tiết, vui lòng xem{" "}
                        <a href="#" className="link">
                            Điều Khoản Dịch Vụ
                        </a>{" "}
                        hoặc{" "}
                        <a href="#" className="link">
                            Liên Hệ với chúng tôi
                        </a>.
                    </p>
                </footer>
            </div>
        </div>
    );
};

export default ChinhSachBaoMat;
