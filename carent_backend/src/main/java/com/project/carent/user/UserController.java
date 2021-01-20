package com.project.carent.user;

import com.project.carent.user.dto.FetchUserDto;
import com.project.carent.user.dto.UserDto;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/users")
public class UserController {

    final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping(value = "/health-check")
    public String getTestMessage() {
        return "Ok";
    }

    @GetMapping(value = "/all")
    public List<FetchUserDto> getAllUsers() {
        return userService.getAllUsers();
    }

    @PutMapping(value = "/edit")
    public ResponseEntity<?> editUser(@RequestParam UUID id, @RequestBody UserDto userDto) {
        return ResponseEntity.accepted().body(userService.editUser(id, userDto));
    }

    @DeleteMapping(value = "/{id}")
    public ResponseEntity<?> deleteById(@PathVariable("id") UUID id) {
        return ResponseEntity.ok(userService.deleteUserById(id));
    }

    @PostMapping("/add")
    public ResponseEntity<?> addUser(@RequestBody UserDto userDto) {
        return ResponseEntity.accepted().body(userService.addUser(userDto));
    }

    @GetMapping("/passports")
    public ResponseEntity<?> getAllUsersPassports() {
        return ResponseEntity.ok().body(userService.getPassports());
    }
}
