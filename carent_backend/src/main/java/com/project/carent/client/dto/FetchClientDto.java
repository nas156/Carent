package com.project.carent.client.dto;

import java.time.LocalDate;
import java.util.UUID;

public interface FetchClientDto {
    UUID getId();

    Integer getPassportNumber();

    String getFirstName();

    String getLastName();

    LocalDate getAddDate();

    Integer getNumberOfOrders();
}
