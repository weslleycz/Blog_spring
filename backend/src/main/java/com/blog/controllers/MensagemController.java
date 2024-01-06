package com.blog.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.blog.model.Mensagem;
import com.blog.service.MensagemService;

@RestController
@RequestMapping("/mensagem")
public class MensagemController {
    @Autowired
    private MensagemService mensagemService;

    @PostMapping
    public ResponseEntity<String> createMensagem(@RequestBody Mensagem mensagem) {
        return mensagemService.saveMensagemR(mensagem);
    }

    @GetMapping
    public List<Mensagem> getAllMensagem() {
        return mensagemService.listAllMessages();
    }

}
