package com.project.carent.user.dto;

import java.time.LocalDate;
import java.util.UUID;

public interface FetchUserDto {
    UUID getId();

    Integer getPassportNumber();

    String getFirstName();

    String getLastName();

    LocalDate getAddDate();

    Integer getNumberOfOrders();
}
