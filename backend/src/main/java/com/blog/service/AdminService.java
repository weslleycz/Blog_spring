package com.blog.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.blog.model.Admin;
import com.blog.model.Post;
import com.blog.repository.AdminRepository;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class AdminService {
    @Autowired
    private AdminRepository adminRepository;

    public Admin savePost(Admin admin) {
        
        return adminRepository.save(admin);
    }
}
