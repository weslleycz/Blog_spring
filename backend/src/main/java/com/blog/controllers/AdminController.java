package com.blog.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.blog.dtos.LoginForm;
import com.blog.model.Admin;
import com.blog.service.AdminService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/admin")
public class AdminController {
    @Autowired
    private AdminService adminService;

    @PostMapping
    public Admin createAdmin(@RequestBody Admin admin) {
        return adminService.saveAdmin(admin);
    }

    @PostMapping("/login")
    public ResponseEntity<String> loginAdmin(@Valid @RequestBody LoginForm loginForm) {
        return adminService.authAdmin(loginForm);
    }
}