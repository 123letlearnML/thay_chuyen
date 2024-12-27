package backend.domain;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class RequestKhachHang {
    private long id;
    private String ten;
    private String email;
    private String soDienThoai;
    private String diaChiGiaoHang;
}
