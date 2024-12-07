package appsuckhoe.nghiemtuc.controller;


import appsuckhoe.nghiemtuc.service.StorageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@RestController
@RequestMapping("/req")
public class FileController {

    @Autowired
    private StorageService storageService;

    // Endpoint để tải ảnh đại diện lên
    @PostMapping("/upload-avatar")
    public ResponseEntity<String> uploadAvatar(@RequestParam("file") MultipartFile file) {
        try {
            // Lưu ảnh và nhận lại tên file đã lưu
            String fileName = storageService.storeFile(file);

            // Trả về URL ảnh đã tải lên
            String fileUrl = "/uploads/" + fileName;
            return ResponseEntity.ok(fileUrl);  // Trả về URL của ảnh
        } catch (IOException e) {
            return ResponseEntity.status(500).body("Upload failed: " + e.getMessage());
        }
    }
}
