package com.blog.repository;

import java.util.Optional;
import java.util.UUID;

import com.blog.model.Admin;
import org.springframework.data.jpa.repository.JpaRepository;


public interface AdminRepository extends JpaRepository<Admin, UUID> {
    Optional<Admin> getByUsername(String username);
}
