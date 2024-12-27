package backend.service;

import backend.domain.KhachHang;
import backend.repository.KhachHangRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class KhachHangServices implements org.springframework.security.core.userdetails.UserDetailsService {

    @Autowired
    private KhachHangRepository khachHangRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Optional<KhachHang> khachHangOptional = khachHangRepository.findByUsername(username); // Tìm khách hàng theo tên (username)

        // Kiểm tra nếu không tìm thấy khách hàng
        KhachHang khachHang = khachHangOptional.orElseThrow(() -> new UsernameNotFoundException("User not found"));

        // Trả về đối tượng UserDetails
        return khachHang;
    }
}
