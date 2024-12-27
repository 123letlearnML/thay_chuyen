package backend.service;

import backend.domain.KhachHang;
import backend.repository.KhachHangRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class AuthenticationServices {
    @Autowired
    private KhachHangRepository khachHangRepository;
    @Autowired
    private PasswordEncoder passwordEncoder;

    public Long login(String username,String password) throws UsernameNotFoundException {
        Optional<KhachHang> user = khachHangRepository.findByUsername(username);
        if(user.isPresent()) {
            boolean isPasswordMatch = passwordEncoder.matches(password, user.get().getMatKhau());
            if(isPasswordMatch){
                return user.get().getMaKhachHang();
            }else {
                return (long) 0;
            }
        }else {
            return (long )0;

        }
    }
    public boolean signup(String username) throws UsernameNotFoundException {
        Optional<KhachHang> user = khachHangRepository.findByUsername(username);
        if(user.isPresent()) {
            return true;
        }else {
            return false;
        }
    }

}
