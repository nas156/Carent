package com.project.carent.user;

import com.project.carent.exception.UserNotFoundException;
import com.project.carent.user.dto.FetchUserDto;
import com.project.carent.user.dto.UserDto;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;
import java.util.UUID;

@Service
public class UserService {

    final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public User getUserById(UUID id) {
        return userRepository.findById(id).orElseThrow(() -> new UserNotFoundException(id.toString()));
    }

    public User getUserByPassport(Integer passport) {
        return userRepository.findUserByPassportNumber(passport).orElseThrow(() -> new UserNotFoundException(passport.toString()));
    }

    public UUID deleteUserById(UUID id) {
        userRepository.deleteById(id);
        return id;
    }

    public UUID addUser(UserDto userDto) {
        var user = User.fromDto(userDto);
        user.setAddDate(LocalDate.now());
        return userRepository.save(user).getId();
    }

    public List<FetchUserDto> getAllUsers() {
        return userRepository.getAllUsers();
    }

    public UserDto editUser(UUID id, UserDto userDto) {
        userRepository.editUser(id, userDto.getFirstName(),
                userDto.getLastName(), userDto.getPassportNumber(),
                userDto.getPassword(), LocalDate.now());
        return userDto;
    }

    public List<Integer> getPassports() {
        return userRepository.getAllPassports();
    }
}
