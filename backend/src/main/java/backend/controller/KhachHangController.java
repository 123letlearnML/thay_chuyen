    package backend.controller;

    import backend.domain.KhachHang;
    import backend.domain.RequestKhachHang;
    import backend.domain.RequestPassword;
    import backend.domain.RequestUsername;
    import backend.repository.KhachHangRepository;
    import backend.service.AuthenticationServices;
    import backend.service.RandomPassword;
    import backend.service.SendMail;
    import backend.util.Jwt;
    import org.springframework.beans.factory.annotation.Autowired;
    import org.springframework.http.HttpStatus;
    import org.springframework.http.ResponseEntity;
    import org.springframework.security.access.AccessDeniedException;
    import org.springframework.security.crypto.password.PasswordEncoder;
    import org.springframework.stereotype.Controller;
    import org.springframework.ui.Model;
    import org.springframework.web.bind.annotation.*;
    import org.springframework.web.servlet.function.RequestPredicate;

    import java.util.HashMap;
    import java.util.List;
    import java.util.Map;
    import java.util.Optional;

    @Controller
    public class KhachHangController {
        @Autowired
        private SendMail sendMail;
        @Autowired
        private Jwt jwt;
        @Autowired
        private AuthenticationServices authenticationServices;
        @Autowired
        private PasswordEncoder passwordEncoder;
        @Autowired
        private KhachHangRepository khachHangRepository;

        @GetMapping("/req/login")
        public String login() {
            return "login";
        }

        @GetMapping("/req/signup")
        public String signup() {
            return "signup";
        }

        @GetMapping("/index")
        public String home() {
            return "index";
        }

        @PostMapping("/req/login")
        public ResponseEntity<Map<String, Object>> login(@RequestParam("username") String username,
                                                         @RequestParam("password") String password) {
            Map<String, Object> response = new HashMap<>();

            // Kiểm tra xem username và password có bị thiếu không
            if (username.isEmpty() || password.isEmpty()) {
                response.put("error", "Username and password are required");
                return ResponseEntity.badRequest().body(response); // Trả về lỗi 400 nếu thiếu thông tin
            }

            // Tìm kiếm người dùng trong cơ sở dữ liệu
            Optional<KhachHang> khachHang = khachHangRepository.findByUsername(username);

            // Nếu không tìm thấy người dùng
            if (!khachHang.isPresent()) {
                response.put("error", "Invalid username or password");
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(response); // Trả về lỗi 401 nếu không tìm thấy người dùng
            }

            // Xác thực đăng nhập
            long login = authenticationServices.login(username, password);
            if (login > 0) {
                try {
                    // Tạo token JWT sau khi đăng nhập thành công
                    String token = jwt.generateToken(username, "ROLE_USER"); // Cập nhật theo cách lấy role của người dùng
                    response.put("token", token); // Gửi token về cho frontend
                    response.put("khachhang", khachHang.get()); // Gửi thông tin khách hàng
                    return ResponseEntity.ok(response); // Trả về mã 200 với token
                } catch (Exception e) {
                    response.put("error", "Error generating JWT token: " + e.getMessage());
                    return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response); // Trả về lỗi 500 nếu gặp vấn đề
                }
            } else {
                response.put("error", "Invalid username or password");
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(response); // Trả về lỗi 401 nếu đăng nhập thất bại
            }
        }


        @DeleteMapping("delete/delete-all")
        public ResponseEntity<Map<String, String>> deleteAll() {
            Map<String, String> response = new HashMap<>();
            try {
                khachHangRepository.deleteAll();  // Xóa tất cả khách hàng
                response.put("message", "All customers have been deleted successfully.");
                return ResponseEntity.ok(response);
            } catch (Exception e) {
                response.put("error", "Failed to delete all customers.");
                return ResponseEntity.status(500).body(response);
            }
        }


        @DeleteMapping("/delete/{id}")
        public ResponseEntity<Map<String, String>> deleteById(@PathVariable("id") Long id) {
            Map<String, String> response = new HashMap<>();
            try {
                if (khachHangRepository.existsById(id)) {
                    khachHangRepository.deleteById(id);  // Xóa khách hàng theo ID
                    response.put("message", "Customer with ID " + id + " has been deleted successfully.");
                    return ResponseEntity.ok(response);
                } else {
                    response.put("error", "Customer with ID " + id + " not found.");
                    return ResponseEntity.status(404).body(response);  // Trả về lỗi nếu không tìm thấy ID
                }
            } catch (Exception e) {
                response.put("error", "Failed to delete customer.");
                return ResponseEntity.status(500).body(response);
            }
        }

        @PostMapping(value = "/req/signup", consumes = "application/json")
        public ResponseEntity<Map<String, String>> createKhachhang(@RequestBody KhachHang khachHang) {
            Map<String, String> response = new HashMap<>();

            if (khachHang.getMatKhau() == null) {
                response.put("error", "Password cannot be null");
                return ResponseEntity.badRequest().body(response);
            }

            boolean check = authenticationServices.signup(khachHang.getTen());
            if (check) {
                response.put("error", "Ten already exited.");
                return ResponseEntity.badRequest().body(response);
            } else {
                String encodedPassword = passwordEncoder.encode(khachHang.getMatKhau());
                khachHang.setMatKhau(encodedPassword);

                khachHangRepository.save(khachHang);

                return ResponseEntity.ok(response);
            }
        }

        @PostMapping("/admin-login")
        public ResponseEntity<?> generateAdminToken(@RequestParam String username) {
            try {
                // Kiểm tra người dùng trong cơ sở dữ liệu
                Optional<KhachHang> khachHang = khachHangRepository.findByUsername(username);

                if (khachHang.isPresent()) {
                    String role = khachHang.get().getRoles();

                    // Kiểm tra nếu người dùng là admin
                    if ("ROLE_ADMIN".equals(role)) {
                        String token = jwt.generateToken(username, role); // Tạo token
                        return ResponseEntity.ok(token); // Trả về token nếu thành công
                    } else {
                        throw new RuntimeException("User is not an admin");
                    }
                } else {
                    throw new RuntimeException("User not found");
                }
            } catch (RuntimeException e) {
                // Bắt lỗi và trả về thông báo rõ ràng
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
            } catch (Exception e) {
                // Bắt các lỗi không mong muốn
                return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                        .body("An unexpected error occurred: " + e.getMessage());
            }
        }

        @GetMapping("/get-all")
        public ResponseEntity<List<KhachHang>> getAll() {
            List<KhachHang> customers = khachHangRepository.findAll();
            if (customers.isEmpty()) {
                return ResponseEntity.noContent().build();
            }
            return ResponseEntity.ok(customers);
        }

        @GetMapping("/get/{id}")
        public ResponseEntity<KhachHang> getById(@PathVariable("id") Long id) {
            return khachHangRepository.findById(id)
                    .map(customer -> ResponseEntity.ok(customer))
                    .orElseGet(() -> ResponseEntity.notFound().build());
        }

        @PostMapping(value = "/reset-password", consumes = "application/json")
        public ResponseEntity<String> reset(@RequestBody RequestUsername userName) {
            try {
                Map<String,Object> data = sendMail.sendMail(RandomPassword.generateRandomPassword(), userName.getUserName());
                String value = (String) data.get("gmail");
                if (data.get("check").equals(true)) {
                    return ResponseEntity.ok(value);
                }
            } catch (AccessDeniedException e) {
                // Nếu gặp lỗi 403, trả về thông báo lỗi chi tiết
                return ResponseEntity.status(HttpStatus.FORBIDDEN).body("Access Denied: " + e.getMessage());
            } catch (Exception e) {
                // Xử lý các lỗi khác
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Error: " + e.getMessage());
            }
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("fails");
        }
        @PutMapping(value = "/updateKhachHang",consumes = "application/json")
        public ResponseEntity<String> update(@RequestBody RequestKhachHang requestKhachHang){
            Optional<KhachHang> khachHang = khachHangRepository.findById(requestKhachHang.getId());
            if(khachHang.isPresent()){
                khachHang.get().setTen(requestKhachHang.getTen());
                khachHang.get().setEmail(requestKhachHang.getEmail());
                khachHang.get().setSoDienThoai(requestKhachHang.getSoDienThoai());
                khachHang.get().setDiaChiGiaoHang(requestKhachHang.getDiaChiGiaoHang());
                khachHangRepository.saveAndFlush(khachHang.get());
                return ResponseEntity.ok("successful");
            }else {
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body("not found.");
            }
        }
        @PutMapping(value = "/changePassword",consumes = "application/json")
        public ResponseEntity<String> update(@RequestBody  RequestPassword requestPassword){
            Optional<KhachHang> khachHang = khachHangRepository.findById(requestPassword.getId());
            if(khachHang.isPresent()){
                boolean check = passwordEncoder.matches(requestPassword.getOldPassword(),khachHang.get().getPassword());
                if(check) {
                    String NewPassword = passwordEncoder.encode(requestPassword.getNewPassword());
                    khachHang.get().setMatKhau(NewPassword);
                    khachHangRepository.saveAndFlush(khachHang.get());
                    return ResponseEntity.ok("successful");
                }else {
                    return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("The old password is incorrect");
                }

            }else {
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body("not found.");
            }
        }

    }
