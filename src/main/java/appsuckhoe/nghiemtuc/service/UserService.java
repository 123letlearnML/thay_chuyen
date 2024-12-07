package appsuckhoe.nghiemtuc.service;

import appsuckhoe.nghiemtuc.domain.User;
import appsuckhoe.nghiemtuc.repository.UserRepository;
import io.jsonwebtoken.Claims;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private BCryptPasswordEncoder passwordEncoder;

    public String register(User user) {
        // Kiểm tra xem login đã tồn tại chưa
        Optional<User> existingUser = userRepository.findByLogin(user.getLogin());
        if (existingUser.isPresent()) {
            throw new IllegalArgumentException("Login already exists!");
        }

        // Mã hóa mật khẩu trước khi lưu
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        userRepository.save(user);

        return "User registered successfully!";
    }

    public String login(String login, String password) {
        // Kiểm tra thông tin đăng nhập
        Optional<User> user = userRepository.findByLogin(login);
        if (user.isEmpty() || !passwordEncoder.matches(password, user.get().getPassword())) {
            throw new IllegalArgumentException("Invalid login or password!");
        }

        // Tạo JWT và trả về
        return JwtUtil.generateToken(login);
    }

    public Claims validateToken(String token) {
        return JwtUtil.validateToken(token);
    }
}
