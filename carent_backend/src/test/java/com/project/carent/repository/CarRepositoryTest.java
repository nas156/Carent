package com.project.carent.repository;

import com.project.carent.car.Car;
import com.project.carent.car.CarRepository;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.jdbc.Sql;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.UUID;

import static org.junit.jupiter.api.Assertions.assertEquals;

@RunWith(SpringRunner.class)
@SpringBootTest
@Sql(value = {"/scripts/before_car_repository_test.sql"}, executionPhase = Sql.ExecutionPhase.BEFORE_TEST_METHOD)
@Sql(value = "/scripts/after_car_test.sql", executionPhase = Sql.ExecutionPhase.AFTER_TEST_METHOD)
public class CarRepositoryTest {

    @Autowired
    private CarRepository carRepository;


    @Test
    public void WhenUpdateValid_thenChangeProperly() {
        var newDesc = "tested desc";
        var newCost = 500;

        carRepository.editCar(UUID.fromString("8dfb5f95-33c5-4953-bfba-dcc9fcdef1f3"), 2, newDesc, newCost);
        var result = carRepository.findCarByNumber(2).orElse(new Car());
        assertEquals(result.getDescription(), newDesc);
        assertEquals(result.getRentalCost(), newCost);

    }

}
