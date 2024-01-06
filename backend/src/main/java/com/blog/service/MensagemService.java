package com.blog.service;

import java.util.List;

import org.apache.logging.log4j.message.Message;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.blog.model.Mensagem;
import com.blog.repository.MensagemRepository;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class MensagemService {
    private final MensagemRepository mensagemRepository;

    public ResponseEntity<String> saveMensagemR(Mensagem mensagem) {
        Mensagem mensagemEntity = mensagemRepository.save(mensagem);
        return ResponseEntity.ok("Mensagem criada");
    }

    public List<Mensagem> listAllMessages() {
        return mensagemRepository.findAll();
    }
}