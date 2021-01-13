package com.project.carent.car.dto;

import com.project.carent.car.Car;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class CarDto {
    private String description;
    private Integer rentalCost;
    private Integer number;

    public static CarDto fromEntity(Car car) {
        return CarDto
                .builder()
                .description(car.getDescription())
                .rentalCost(car.getRentalCost())
                .number(car.getNumber())
                .build();
    }
}
