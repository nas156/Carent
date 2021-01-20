package com.project.carent.user;

import com.project.carent.auth.AuthUser;
import com.project.carent.user.dto.UserDto;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
public class UserService implements UserDetailsService {
    private final UserRepository usersRepository;

    public UserService(UserRepository usersRepository) {
        this.usersRepository = usersRepository;
    }

    @Override
    public AuthUser loadUserByUsername(String email) throws UsernameNotFoundException {
        return usersRepository
                .findByEmail(email)
                .map(user -> new AuthUser(user.getId(), user.getEmail(), user.getPassword()))
                .orElseThrow(() -> new UsernameNotFoundException(email));
    }

    public UserDto getUserById(UUID id) {
        return usersRepository
                .findById(id)
                .map(user -> UserDto.builder().email(user.getEmail()).name(user.getName()).build())
                .orElseThrow(() -> new UsernameNotFoundException("No user found with username"));
    }

    public void save(User user) {
        usersRepository.save(user);
    }
}
