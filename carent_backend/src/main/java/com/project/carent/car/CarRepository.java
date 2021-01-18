package com.project.carent.car;

import com.project.carent.car.dto.FetchCarDto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;
import java.util.UUID;


@Repository
public interface CarRepository extends JpaRepository<Car, UUID> {

    @Modifying
    @Transactional
    @Query(value = "update Car c set c.description = :description, c.rentalCost = :rentalCost, c.number = :newNumber where c.id = :id")
    void editCar(UUID id, Integer newNumber, String description, Integer rentalCost);

    @Query(value = "select c.id as id, c.number as number, c.description as description, c.rentalCost as rentalCost, size(c.orders) as numberOfRents from Car c order by c.number")
    List<FetchCarDto> getAllCars();

    Optional<Car> findCarByNumber(Integer number);
}
