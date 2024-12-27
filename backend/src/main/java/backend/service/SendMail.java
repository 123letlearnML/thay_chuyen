package backend.service;

import backend.domain.KhachHang;
import backend.repository.KhachHangRepository;
import jakarta.mail.*;
import jakarta.mail.internet.InternetAddress;
import jakarta.mail.internet.MimeMessage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.io.UnsupportedEncodingException;
import java.util.HashMap;
import java.util.Map;
import java.util.Optional;
import java.util.Properties;
@Service
public class SendMail {
    @Autowired
    private KhachHangRepository khachHangRepository;
    @Autowired
    private PasswordEncoder passwordEncoder;
    public Map<String,Object> sendMail(String newPassword, String userName)

    {
//        String RandomPassword = randomPassword.generateRandomPassword();
        final String username = "DOUBLE SHOP";
        final String email = "bapheo1999@gmail.com";
        final String password = "ibkd efxz snpl yuuv";
        Optional<KhachHang> khachHang = khachHangRepository.findByUsername(userName);
        Map<String,Object> data = new HashMap<>();

        Properties props = new Properties();
        props.put("mail.smtp.auth", "true");
        props.put("mail.smtp.starttls.enable", "true");
        props.put("mail.smtp.host", "smtp.gmail.com");
        props.put("mail.smtp.port", "587");

        Session session = Session.getInstance(props, new Authenticator() {

            @Override
            protected PasswordAuthentication getPasswordAuthentication() {
                return new PasswordAuthentication(email, password);
            }
        });

        try {
            if(khachHang.isPresent()){
                String gmail = khachHang.get().getEmail();
                Message message = new MimeMessage(session);
                message.setFrom(new InternetAddress(email,username));
                message.setRecipients(Message.RecipientType.TO, InternetAddress.parse(gmail));
                message.setSubject("DOUBLE SHOP - request Password");
                message.setText("Dear Mail Crawler, \n\n No spam to my email, please! "+"Password="+newPassword);
                Transport.send(message);
                String encodedPassword = passwordEncoder.encode(newPassword);
                khachHang.get().setMatKhau(encodedPassword);
                khachHangRepository.saveAndFlush(khachHang.get());

                System.out.println("Sent message successfully....");
                data.put("check",true);
                data.put("gmail",gmail);
                return data;
            }else {
                data.put("check",false);
                return data;
            }
        } catch (MessagingException e) {
            System.out.println(e);
            data.put("check",false);
            return data;
        } catch (UnsupportedEncodingException e) {
            System.out.println(e);
//            throw new RuntimeException(e);
            data.put("check",false);
            return data;
        }
    }
}