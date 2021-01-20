package com.project.carent.auth;

import com.project.carent.auth.dto.AuthUserDto;
import com.project.carent.auth.dto.UserLoginDto;
import com.project.carent.auth.dto.UserRegisterDto;
import com.project.carent.user.User;
import com.project.carent.user.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AuthService {
    private final PasswordEncoder bCryptPasswordEncoder;
    private final AuthenticationManager authenticationManager;
    private final TokenService tokenService;
    private final UserService userDetailsService;

    public AuthService(PasswordEncoder bCryptPasswordEncoder, AuthenticationManager authenticationManager, TokenService tokenService, UserService userDetailsService) {
        this.bCryptPasswordEncoder = bCryptPasswordEncoder;
        this.authenticationManager = authenticationManager;
        this.tokenService = tokenService;
        this.userDetailsService = userDetailsService;
    }

    public AuthUserDto register(UserRegisterDto userDto) throws Exception {
        User user = User.builder()
                .email(userDto.getEmail())
                .name(userDto.getName())
                .password(userDto.getPassword())
                .build();
        var loginDTO = new UserLoginDto(user.getEmail(), user.getPassword());
        user.setPassword(bCryptPasswordEncoder.encode(user.getPassword()));
        userDetailsService.save(user);
        return login(loginDTO);
    }

    public AuthUserDto login(UserLoginDto user) throws Exception {
        Authentication auth;
        try {
            auth = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(user.getEmail(), user.getPassword()));
        }
        catch (BadCredentialsException e) {
            throw new Exception("Incorrect username or password", e);
        }

        var currentUser = (AuthUser)auth.getPrincipal();
        final var userDetails = userDetailsService.getUserById(currentUser.getId());
        final String jwt = tokenService.generateToken(currentUser);
        return new AuthUserDto(jwt, userDetails);
    }
}
