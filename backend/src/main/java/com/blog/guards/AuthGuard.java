package com.blog.guards;

import org.springframework.web.servlet.HandlerInterceptor;

import com.blog.utils.JwtUtil;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

public class AuthGuard implements HandlerInterceptor {
    private final JwtUtil jwtUtil;

    // Constructor to inject JwtUtil
    public AuthGuard(JwtUtil jwtUtil) {
        this.jwtUtil = jwtUtil;
    }

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler)
            throws Exception {
        if ("POST".equals(request.getMethod())) {
            // System.out.println("Pré-execução do controller. Interceptando...");
            String authorizationHeader = request.getHeader("Authorization");
            if (authorizationHeader != null && authorizationHeader.startsWith("Bearer ")) {
                String jwtToken = authorizationHeader.substring(7);
                System.out.println(jwtToken);
                if (this.jwtUtil.validateToken(jwtToken)) {
                    return true;
                } else {
                    response.sendError(HttpServletResponse.SC_UNAUTHORIZED, "Operação não autorizada");
                    return false;
                }
            } else {
                response.sendError(HttpServletResponse.SC_UNAUTHORIZED, "Esquema de autorização inválido");
                return false;
            }
        } else {
            return true;
        }
    }

    // @Override
    // public void postHandle(HttpServletRequest request, HttpServletResponse
    // response, Object handler,
    // ModelAndView modelAndView) throws Exception {
    // // Lógica a ser executada após a execução do controller
    // System.out.println("Pós-execução do controller. Interceptando...");
    // }

    // @Override
    // public void afterCompletion(HttpServletRequest request, HttpServletResponse
    // response, Object handler, Exception ex)
    // throws Exception {
    // // Lógica a ser executada após a conclusão do processamento do request
    // System.out.println("Após conclusão do request. Interceptando...");
    // }
}
