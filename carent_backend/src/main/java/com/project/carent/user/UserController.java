package com.project.carent.user;

import com.project.carent.user.dto.UserDto;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import static com.project.carent.auth.TokenService.getUserId;

@Slf4j
@RestController
@RequestMapping(value = "/user")
public class UserController {
    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping
    public UserDto getCurrentUser() {
        var userId = getUserId();
        log.info("Getting user id: " + userId);
        return userService.getUserById(userId);
    }
}
