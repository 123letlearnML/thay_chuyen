package appsuckhoe.nghiemtuc.service;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.SignatureException;

import javax.crypto.spec.SecretKeySpec;
import java.security.Key;
import java.util.Date;

public class JwtUtil {

    // Secret key để ký JWT
    private static final String SECRET_KEY = "my-very-long-secret-key-256-bits-secure";

    // Tạo Key từ SECRET_KEY
    static Key key = new SecretKeySpec(SECRET_KEY.getBytes(), SignatureAlgorithm.HS256.getJcaName());

    // Tạo JWT
    public static String generateToken(String username) {
        long currentTimeMillis = System.currentTimeMillis();
        long expirationTimeMillis = currentTimeMillis + (1000 * 60 * 60); // 1 giờ

        return Jwts.builder()
                .setSubject(username) // payload - thông tin người dùng
                .setIssuedAt(new Date(currentTimeMillis)) // iat
                .setExpiration(new Date(expirationTimeMillis)) // exp
                .signWith(key) // signature
                .compact(); // tạo token
    }

    // Xác thực JWT (cập nhật phương thức này)
    public static Claims validateToken(String token) {
        try {
            // Sử dụng JwtParserBuilder và Key thay cho String
            return Jwts.parserBuilder()
                    .setSigningKey(key) // Sử dụng Key để xác thực chữ ký
                    .build()
                    .parseClaimsJws(token) // phân tích JWT
                    .getBody(); // lấy payload
        } catch (SignatureException e) {
            throw new IllegalArgumentException("Invalid JWT Signature");
        }
    }
}
