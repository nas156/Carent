package com.project.carent.exception;

import java.util.UUID;

public class CarNotFoundException extends RuntimeException {

    private final String idetnifier;

    public CarNotFoundException(String idetnifier) {
        super();
        this.idetnifier = idetnifier;
    }

    @Override
    public String getMessage() {
        return idetnifier;
    }
}
