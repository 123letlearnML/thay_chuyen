package appsuckhoe.nghiemtuc.service;

import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;


import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.UUID;

@Service
public class StorageService {

    // Đọc đường dẫn lưu ảnh từ file cấu hình (application.properties)
    @Value("${upload.dir}")
    private String uploadDir;

    // Hàm khởi tạo (sử dụng @PostConstruct để đảm bảo giá trị đã được inject)
    @PostConstruct
    public void init() {
        // Kiểm tra xem đường dẫn uploadDir có hợp lệ không
        if (uploadDir == null || uploadDir.isEmpty()) {
            System.out.println("Upload directory is NOT configured correctly.");
            throw new IllegalArgumentException("Đường dẫn thư mục upload chưa được cấu hình đúng.");
        }

        System.out.println("Configured upload directory: " + uploadDir);  // In ra giá trị của uploadDir để kiểm tra

        // Kiểm tra nếu thư mục chưa tồn tại, sẽ tạo mới thư mục
        File uploadDirFile = new File(uploadDir);
        if (!uploadDirFile.exists()) {
            boolean created = uploadDirFile.mkdirs();  // Tạo thư mục nếu không tồn tại
            if (!created) {
                throw new RuntimeException("Không thể tạo thư mục upload.");
            }
        }
    }

    // Hàm lưu file ảnh vào server
    public String storeFile(MultipartFile file) throws IOException {
        // Kiểm tra file có rỗng hay không
        if (file.isEmpty()) {
            throw new IOException("Failed to store empty file.");
        }

        // Lấy tên file gốc
        String originalFileName = file.getOriginalFilename();
        if (originalFileName == null) {
            throw new IOException("Failed to store file with null name.");
        }

        // Tạo tên file ngẫu nhiên để tránh trùng lặp
        String fileExtension = originalFileName.substring(originalFileName.lastIndexOf("."));
        String newFileName = UUID.randomUUID().toString() + fileExtension;

        // Xác định đường dẫn lưu trữ file
        Path targetLocation = Paths.get(uploadDir + "/" + newFileName);

        // Lưu file vào server
        Files.copy(file.getInputStream(), targetLocation);

        return newFileName;  // Trả về tên file mới
    }
}
