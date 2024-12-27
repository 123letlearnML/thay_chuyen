package backend.repository;

import backend.domain.SanPham;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface SanPhamRepository extends JpaRepository<SanPham, String> {


    List<SanPham> getSanPhamByThuongHieu(String thuongHieu);
    // Truy vấn tất cả sản phẩm nhóm theo thương hiệu
    List<SanPham> findAllByOrderByThuongHieuAsc();
    @Query("SELECT sp FROM SanPham sp WHERE sp.tenSanPham LIKE %:keyword% OR sp.moTa LIKE %:keyword% OR sp.thuongHieu LIKE %:keyword%")
    List<SanPham> searchByKeyword(@Param("keyword") String keyword);
}
