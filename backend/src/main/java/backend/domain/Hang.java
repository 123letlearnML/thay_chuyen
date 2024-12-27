package backend.domain;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Entity
@Table(name = "hang")
public class Hang {
    @Id
    @Getter
    @Setter
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long maDonHang;
    @ManyToOne
    @JoinColumn(name = "ma_khach_hang")
    private KhachHang khachHang;
    @OneToMany
    @JoinColumn(name = "ma_don_hang")
    private List<SanPham> danhSachSanPham;
    private double tongGiaTri;
    private String trangThai;
    private String phuongThucThanhToan;
    private String maGiaoDich;
    private String ngayDatHang;
    private String ngayGiaoHang;
    private String ghiChu;

}
