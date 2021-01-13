package com.project.carent.car.dto;

import java.util.UUID;

public interface FetchCarDto {
    String getDescription();

    Integer getRentalCost();

    Integer getNumber();

    UUID getId();

    Integer getNumberOfRents();
}
