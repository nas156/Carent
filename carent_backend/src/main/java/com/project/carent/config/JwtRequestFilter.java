package com.project.carent.config;

import com.project.carent.auth.TokenService;
import com.project.carent.user.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.ArrayList;

import static com.project.carent.config.SecurityConstants.HEADER_STRING;
import static com.project.carent.config.SecurityConstants.TOKEN_PREFIX;


@Component
public class JwtRequestFilter extends OncePerRequestFilter {

    private final TokenService tokenService;

    private final UserService userDetailsService;

    public JwtRequestFilter(TokenService tokenService, UserService userDetailsService) {
        this.tokenService = tokenService;
        this.userDetailsService = userDetailsService;
    }

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain chain)
            throws ServletException, IOException {

        final String header = request.getHeader(HEADER_STRING);

        if (header == null || !header.startsWith(TOKEN_PREFIX)){
            chain.doFilter(request, response);
            return;
        }

        UsernamePasswordAuthenticationToken authentication = getAuthentication(header);

        SecurityContextHolder.getContext().setAuthentication(authentication);
        chain.doFilter(request, response);
    }

    private UsernamePasswordAuthenticationToken getAuthentication(String token) {
        if (token != null) {
            var tokenString = token.replace(TOKEN_PREFIX, "");
            if (tokenService.validateToken(tokenString)) {
                var user = userDetailsService.loadUserById(tokenService.extractUserid(tokenString));
                return new UsernamePasswordAuthenticationToken(user, null, new ArrayList<>());
            }
            return null;
        }
        return null;
    }
}
