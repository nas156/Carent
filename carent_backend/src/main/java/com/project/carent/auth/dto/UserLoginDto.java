package com.project.carent.auth.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

@AllArgsConstructor
@Data
public class UserLoginDto {
    private String email;
    private String password;
}
