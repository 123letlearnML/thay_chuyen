package backend.domain;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.Collections;

@Entity
@Getter
@Setter
@Table(name = "khach_hang")
public class KhachHang implements UserDetails {

@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long maKhachHang;
    private String roles = "ROLE_USER";
    private String ten= "user";
    private String email;
    private String username;
    private String matKhau;
    private String soDienThoai;
    private String diaChiGiaoHang;

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return Collections.singletonList(() -> this.roles); // Return the role as authority
    }

    @Override
    public String getPassword() {
        return this.matKhau; // Return password
    }

    @Override
    public String getUsername() {
        return this.ten; // Return username (in your case, 'ten' is the username)
    }

    @Override
    public boolean isAccountNonExpired() {
        return true; // Assuming the account is always non-expired
    }

    @Override
    public boolean isAccountNonLocked() {
        return true; // Assuming the account is always non-locked
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true; // Assuming the credentials are always non-expired
    }

    @Override
    public boolean isEnabled() {
        return true; // Assuming the account is always enabled
    }
}
