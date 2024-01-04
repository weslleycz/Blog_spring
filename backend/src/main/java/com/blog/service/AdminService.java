package com.blog.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.blog.dtos.LoginForm;
import com.blog.model.Admin;
import com.blog.repository.AdminRepository;

import at.favre.lib.crypto.bcrypt.BCrypt;
import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class AdminService {
    @Autowired
    private AdminRepository adminRepository;

    public Admin saveAdmin(Admin admin) {
        String bcryptHashString = BCrypt.withDefaults().hashToString(12, admin.getPassword().toCharArray());
        admin.setPassword(bcryptHashString);
        return adminRepository.save(admin);
    }

    public ResponseEntity<String> authAdmin(LoginForm loginForm) {
        Optional<Admin> admin = adminRepository.getByUsername(loginForm.getUsername());
        if (admin.isPresent()) {
            Admin adminEntity = admin.get();
            if (BCrypt.verifyer().verify(loginForm.getPassword().toCharArray(),
                adminEntity.getPassword().toCharArray()) != null) {
                return ResponseEntity.ok("yuihujjkkj");
            } else {
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body("admin not found");
            }
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("admin not found");
        }
    }
}
