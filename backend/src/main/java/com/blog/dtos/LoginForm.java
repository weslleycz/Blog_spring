package com.blog.dtos;

import jakarta.validation.constraints.NotEmpty;
import lombok.Data;

@Data
public class LoginForm {

    @NotEmpty(message = "O campo 'username' não pode estar vazio")
    private String username;

    @NotEmpty(message = "O campo 'password' não pode estar vazio")
    private String password;

}
