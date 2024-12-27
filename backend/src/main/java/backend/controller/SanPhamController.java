package backend.controller;

import backend.domain.SanPham;
import backend.service.SanPhamService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.InputStreamResource;
import org.springframework.data.domain.Page;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.net.URI;
import java.nio.file.Files;
import java.util.List;

@RestController
@RequestMapping("/SanPham")
public class SanPhamController {

@Autowired
    SanPhamService sanPhamService;


    @PostMapping
    public ResponseEntity<SanPham> createSanPham(@RequestBody SanPham contact) {
        return ResponseEntity.created(URI.create("/userID")).body(sanPhamService.createSanPham(contact));
    }

    @GetMapping
    public ResponseEntity<Page<SanPham>> getSanPhams(@RequestParam(value = "page", defaultValue = "0") int page,
                                                     @RequestParam(value = "size", defaultValue = "10") int size) {
        return ResponseEntity.ok().body(sanPhamService.getAllSanPhams(page, size));
    }

    @GetMapping("/{id}")
    public ResponseEntity<SanPham> getSanPham(@PathVariable(value = "id") String id) {
        return ResponseEntity.ok().body(sanPhamService.getSanPham(id));
    }

    @PutMapping("/{id}")
    public ResponseEntity<SanPham> updateSanPham(@PathVariable("id") String id, @RequestBody SanPham sanPham) {
        try {

            SanPham updatedSanPham = sanPhamService.putSanPham(id, sanPham);


            return ResponseEntity.ok(updatedSanPham);
        } catch (RuntimeException e) {

            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }
    }




    @GetMapping("/thuongHieu/{thuongHieu}") // URL: /api/sanpham/thuonghieu/{thuongHieu}
    public ResponseEntity<List<SanPham>> getSanPhamByThuongHieu(@PathVariable String thuongHieu) {
        try {
            List<SanPham> sanPhams = sanPhamService.getSanPhamByThuongHieu(thuongHieu);
            return ResponseEntity.ok(sanPhams); // Return 200 OK with the list of products
        } catch (RuntimeException e) {
            return ResponseEntity.status(404).body(null); // Return 404 if no products found
        }
    }



@GetMapping("/image/download/{imageName}")
public ResponseEntity<InputStreamResource> downloadImage(@PathVariable String imageName) throws IOException {
    // Mở file bằng FileInputStream
    File imageFile = sanPhamService.getImageFile(imageName);
    FileInputStream fileInputStream = new FileInputStream(imageFile);

    // Trả về file dưới dạng InputStreamResource và thiết lập các header thích hợp cho việc tải xuống
    return ResponseEntity.ok()
            .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=" + imageFile.getName())  // Thêm header cho việc tải file
            .header(HttpHeaders.CONTENT_TYPE, MediaType.IMAGE_JPEG_VALUE)  // Tùy theo loại file (JPEG, PNG, v.v.)
            .body(new InputStreamResource(fileInputStream));
}


    @GetMapping("/image/view/{imageName}")
    public ResponseEntity<InputStreamResource> viewImage(@PathVariable String imageName) throws IOException {
        // Lấy file hình ảnh từ dịch vụ
        File imageFile = sanPhamService.getImageFile(imageName);

        FileInputStream fileInputStream = new FileInputStream(imageFile);
        String contentType = Files.probeContentType(imageFile.toPath());
        if (contentType == null) {
            contentType = MediaType.APPLICATION_OCTET_STREAM_VALUE;
        }
        if (imageFile.exists()) {
          System.out.println("da co imgefile");
        } else {
            // Xử lý khi file không tồn tại
            System.out.println("File không tồn tại: " + imageFile);
        }
        return ResponseEntity.ok()
                .header(HttpHeaders.CONTENT_TYPE,contentType)
                .header(HttpHeaders.CONTENT_DISPOSITION, "inline; filename=" + imageFile.getName())
              // Đặt Content-Type cho hình ảnh (JPEG, PNG, v.v.)
                .body(new InputStreamResource(fileInputStream));
    }
    @GetMapping("/group-by-brand")
    public ResponseEntity<List<SanPham>> getAllSanPhamGroupedByThuongHieu() {
        List<SanPham> sanPhamList = sanPhamService.getAllSanPhamGroupedByThuongHieu();
        return ResponseEntity.ok(sanPhamList);
    }
    @GetMapping("/search")
    public ResponseEntity<List<SanPham>> searchSanPham(@RequestParam String keyword) {
        List<SanPham> sanPhamList = sanPhamService.searchSanPhamByKeyword(keyword);
        return ResponseEntity.ok(sanPhamList);
    }
}
