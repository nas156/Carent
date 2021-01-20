package com.project.carent.auth.dto;

import com.project.carent.user.dto.UserDto;
import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class AuthUserDto {
    private String token;
    private UserDto user;
}
