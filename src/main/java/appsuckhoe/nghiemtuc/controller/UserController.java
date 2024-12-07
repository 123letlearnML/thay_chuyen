package appsuckhoe.nghiemtuc.controller;

import appsuckhoe.nghiemtuc.domain.User;
import appsuckhoe.nghiemtuc.service.UserService;
import io.jsonwebtoken.Claims;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/user")
public class UserController {

    @Autowired
    private UserService userService;

    // API đăng ký
    @PostMapping("/register")
    public String register(@RequestBody User user) {
        return userService.register(user);
    }

    // API đăng nhập
    @PostMapping("/login")
    public String login(@RequestParam String login, @RequestParam String password) {
        return userService.login(login, password);
    }

    // API xác thực token
    @PostMapping("/validate")
    public Claims validateJwt(@RequestParam String token) {
        return userService.validateToken(token);
    }
}
