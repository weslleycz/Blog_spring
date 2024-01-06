package com.blog.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import com.blog.guards.AuthGuard;
import com.blog.utils.JwtUtil;

@Configuration
public class AppConfig implements WebMvcConfigurer {

    @Bean
    public JwtUtil jwtUtil() {
        // Implement your JwtUtil creation logic here
        return new JwtUtil();
    }

    @Override
    public void addInterceptors(InterceptorRegistry registry) {
        registry.addInterceptor(new AuthGuard(jwtUtil())).addPathPatterns("/posts/**");
    }
}
