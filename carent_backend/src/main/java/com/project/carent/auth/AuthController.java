package com.project.carent.auth;

import com.project.carent.auth.dto.AuthUserDto;
import com.project.carent.auth.dto.UserLoginDto;
import com.project.carent.auth.dto.UserRegisterDto;
import com.project.carent.user.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
public class AuthController {
    private final AuthService authService;

    public AuthController(AuthService authService) {
        this.authService = authService;
    }

    @PostMapping("/register")
    public AuthUserDto signUp(@RequestBody UserRegisterDto user) throws Exception {
        return authService.register(user);
    }

    @PostMapping("/login")
    public AuthUserDto login(@RequestBody UserLoginDto user) throws Exception {
        return authService.login(user);
    }
}
