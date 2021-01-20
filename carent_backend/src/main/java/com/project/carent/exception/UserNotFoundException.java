package com.project.carent.exception;

public class UserNotFoundException extends RuntimeException {

    private final String identifier;

    public UserNotFoundException(String identifier) {
        super();
        this.identifier = identifier;
    }

    @Override
    public String getMessage() {
        return identifier;
    }
}
