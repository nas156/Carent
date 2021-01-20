package com.project.carent.config;

public class SecurityConstants {
    public static final long EXPIRATION_TIME = 864_000_000; // 1 day
    public static final String TOKEN_PREFIX = "Bearer ";
    public static final String HEADER_STRING = "Authorization";
    public static final String[] ROUTES_WHITE_LIST = {"/auth/login", "/auth/register"};

}
