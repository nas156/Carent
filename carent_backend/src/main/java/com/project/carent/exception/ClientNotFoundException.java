package com.project.carent.exception;

public class ClientNotFoundException extends RuntimeException {

    private final String identifier;

    public ClientNotFoundException(String identifier) {
        super();
        this.identifier = identifier;
    }

    @Override
    public String getMessage() {
        return identifier;
    }
}
