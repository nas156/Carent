package com.project.carent.user;

import com.project.carent.user.dto.FetchUserDto;
import com.project.carent.user.dto.UserDto;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/user")
public class UserController {

    final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping(value = "/test")
    public String getTestMessage() {
        return "Test is ok";
    }

    @GetMapping(value = "/all")
    public List<FetchUserDto> getAllUsers() {
        return userService.getAllUsers();
    }

    @PostMapping(value = "/edit")
    public ResponseEntity<?> editUser(@RequestParam UUID id, @RequestBody UserDto userDto) {
        return ResponseEntity.accepted().body(userService.editUser(id, userDto));
    }

    @DeleteMapping(value = "/{id}")
    public ResponseEntity<?> deleteById(@PathVariable("id") UUID id) {
        return ResponseEntity.ok(userService.deleteUserById(id));
    }

    @PostMapping
    public ResponseEntity<?> addUser(@RequestBody UserDto userDto) {
        return ResponseEntity.accepted().body(userService.addUser(userDto));
    }
}
