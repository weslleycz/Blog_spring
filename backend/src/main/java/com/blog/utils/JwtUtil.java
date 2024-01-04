package com.blog.utils;

import java.text.ParseException;
import java.util.Date;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import com.nimbusds.jose.JOSEException;
import com.nimbusds.jose.JWSAlgorithm;
import com.nimbusds.jose.JWSHeader;
import com.nimbusds.jose.JWSVerifier;
import com.nimbusds.jose.crypto.MACSigner;
import com.nimbusds.jose.crypto.MACVerifier;
import com.nimbusds.jwt.JWTClaimsSet;
import com.nimbusds.jwt.SignedJWT;

import jakarta.annotation.PostConstruct;

@Service
public class JwtUtil {
    private static String SECRET_KEY;

    @Value("${SECRET_KEY}")
    private String secretKeyFromProperties;

    @PostConstruct
    private void init() {
        SECRET_KEY = secretKeyFromProperties;
    }

    public static String generateToken(String subject) throws JOSEException {
        // Criar os claims do JWT
        JWTClaimsSet claimsSet = new JWTClaimsSet.Builder()
                .subject(subject)
                .issuer("your-issuer")
                .expirationTime(new Date(System.currentTimeMillis() + 3600 * 1000)) // 1 hora de expiração
                .jwtID(UUID.randomUUID().toString())
                .build();

        // Criar um objeto JWT assinado
        SignedJWT signedJWT = new SignedJWT(new JWSHeader(JWSAlgorithm.HS256), claimsSet);

        // Assinar o JWT com a chave secreta
        signedJWT.sign(new MACSigner(SECRET_KEY));

        // Obter a representação do JWT como uma string
        return signedJWT.serialize();
    }

    public boolean validateToken(String token) throws ParseException, JOSEException {
        // Parse do JWT
        SignedJWT signedJWT = SignedJWT.parse(token);

        // Verificar a assinatura com a chave secreta
        JWSVerifier verifier = new MACVerifier(SECRET_KEY);
        return signedJWT.verify(verifier) && !signedJWT.getJWTClaimsSet().getExpirationTime().before(new Date());
    }
}
