package com.blog.service;

import java.util.Optional;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.blog.dtos.LoginForm;
import com.blog.model.Admin;
import com.blog.repository.AdminRepository;
import com.blog.utils.JwtUtil;
import com.nimbusds.jose.JOSEException;

import at.favre.lib.crypto.bcrypt.BCrypt;
import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class AdminService {
    private final AdminRepository adminRepository;
    private final JwtUtil jwtUtil;

    public String saveAdmin(Admin admin) throws JOSEException  {
        String bcryptHashString = BCrypt.withDefaults().hashToString(12, admin.getPassword().toCharArray());
        admin.setPassword(bcryptHashString);
        Admin adminEntity = adminRepository.save(admin);
         String token = JwtUtil.generateToken(adminEntity.getId().toString());
        return token;
    }

    public ResponseEntity<String> authAdmin(LoginForm loginForm) throws JOSEException {
        Optional<Admin> admin = adminRepository.getByUsername(loginForm.getUsername());        if (admin.isPresent()) {
            Admin adminEntity = admin.get();
            if (BCrypt.verifyer().verify(loginForm.getPassword().toCharArray(),
                    adminEntity.getPassword().toCharArray()) != null) {
                String token = JwtUtil.generateToken(adminEntity.getId().toString());
                return ResponseEntity.ok(token);
            } else {
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body("admin not found");
            }
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("admin not found");
        }
    }
}
