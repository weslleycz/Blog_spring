package com.blog.repository;

import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.blog.model.Mensagem;

@Repository
public interface MensagemRepository  extends JpaRepository<Mensagem, UUID> {

}