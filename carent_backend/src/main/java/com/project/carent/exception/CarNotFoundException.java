package com.project.carent.exception;

import java.util.UUID;

public class CarNotFoundException extends RuntimeException {

    private final UUID id;

    public CarNotFoundException(UUID id) {
        super();
        this.id = id;
    }

    @Override
    public String getMessage() {
        return id.toString();
    }
}
