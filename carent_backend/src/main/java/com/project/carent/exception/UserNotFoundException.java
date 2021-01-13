package com.project.carent.exception;

import java.util.UUID;

public class UserNotFoundException extends RuntimeException {

    private final UUID id;

    public UserNotFoundException(UUID id) {
        super();
        this.id = id;
    }

    @Override
    public String getMessage() {
        return id.toString();
    }
}
