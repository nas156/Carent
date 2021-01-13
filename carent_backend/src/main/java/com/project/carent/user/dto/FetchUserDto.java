package com.project.carent.user.dto;

import java.util.UUID;

public interface FetchUserDto {
    UUID getId();

    String getFirstName();

    String getLastName();

    String getAddDate();

    Integer getNumberOfOrders();
}
