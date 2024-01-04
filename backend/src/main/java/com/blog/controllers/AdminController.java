package com.blog.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.blog.dtos.AdminResponseDTO;
import com.blog.dtos.LoginForm;
import com.blog.model.Admin;
import com.blog.service.AdminService;
import com.nimbusds.jose.JOSEException;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/admin")
public class AdminController {
    @Autowired
    private AdminService adminService;

    @PostMapping
    public ResponseEntity<AdminResponseDTO> createAdmin(@RequestBody Admin admin) throws JOSEException {
        String token = adminService.saveAdmin(admin);
        AdminResponseDTO adminResponse = new AdminResponseDTO(token);
        return new ResponseEntity<>(adminResponse, HttpStatus.CREATED);
    }

    @PostMapping("/login")
    public ResponseEntity<String> loginAdmin(@Valid @RequestBody LoginForm loginForm) throws JOSEException {
        return adminService.authAdmin(loginForm);
    }
}