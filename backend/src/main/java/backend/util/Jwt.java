package backend.util;

import io.jsonwebtoken.*;
import io.jsonwebtoken.security.Keys;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Component;

import javax.crypto.SecretKey;
import java.util.Date;
@Component
public class Jwt {

    private final SecretKey SECRET_KEY = Keys.secretKeyFor(SignatureAlgorithm.HS256); // Khóa bí mật của bạn
    private final long EXPIRATION_TIME = 3600000 * 24 * 365; // Thời gian hết hạn (1 giờ)


    // Tạo JWT
    public String generateToken(String username,String role) {
        return Jwts.builder()
                .setSubject(username)
                .claim("role",role)
                .setIssuedAt(new Date())
                .setExpiration(new Date(System.currentTimeMillis() + EXPIRATION_TIME))
                .signWith(SignatureAlgorithm.HS256, SECRET_KEY)
                .compact();
    }

    public String extractUsername(String token) {
        return getClaims(token).getSubject(); // Trích xuất username từ claims
    }

    // 3. Kiểm tra JWT có hết hạn hay không
    private boolean isTokenExpired(String token) {
        Date expiration = getClaims(token).getExpiration();
        return expiration.before(new Date());
    }
    public String extractRole(String token) {
        return (String) getClaims(token).get("role"); // Trích xuất role từ claims
    }

    // 4. Xác minh JWT
    public boolean validateToken(String token, String username,String role) {
        String extractedUsername = extractUsername(token);
        return extractedUsername.equals(username) && extractRole(token).equals(role) && !isTokenExpired(token);
    }

    // 5. Lấy Claims từ JWT
    private Claims getClaims(String token) {
        return Jwts.parser()
                .setSigningKey(SECRET_KEY)
                .build()
                .parseClaimsJws(token)
                .getBody();
    }
}