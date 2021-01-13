package com.project.carent.order.dto;

import java.time.LocalDate;
import java.util.UUID;

public interface FetchOrderDto {
    UUID getId();

    Integer getCarNumber();

    Integer getUserPassport();

    LocalDate getAddDate();

    Integer getRentalTime();

    Integer getRentalCost();
}
