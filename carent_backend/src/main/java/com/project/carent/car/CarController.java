package com.project.carent.car;

import com.project.carent.car.dto.CarDto;
import com.project.carent.car.dto.FetchCarDto;
import com.project.carent.car.dto.NumberDescriptionDto;
import lombok.extern.log4j.Log4j;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

import static com.project.carent.auth.TokenService.getUserId;

@RestController
@Slf4j
@RequestMapping(value = "/cars")
public class CarController {

    final CarService carService;

    public CarController(CarService carService) {
        this.carService = carService;
    }

    @GetMapping(value = "/all")
    public ResponseEntity<List<FetchCarDto>> getAllCars() {
        log.info("Fetching all cars userId: " + getUserId().toString());
        return ResponseEntity.ok().body(carService.getAllCars());
    }

    @PostMapping("/add")
    public ResponseEntity<UUID> addCar(@RequestBody CarDto car) {
        log.info(String.format("Add car userId: %s", getUserId().toString()));
        return ResponseEntity.accepted().body(carService.addCar(car));
    }

    @DeleteMapping(value = "/one")
    public ResponseEntity<UUID> deleteCar(@RequestParam UUID id) {
        log.info(String.format("Delete car carId: %s, userId: %s", id.toString(), getUserId().toString()));
        return ResponseEntity.ok().body(carService.deleteCarById(id));
    }

    @PutMapping(value = "/edit")
    public ResponseEntity<CarDto> editCar(@RequestBody CarDto carDto, @RequestParam UUID id) {
        log.info(String.format("Edit car carId: %s, userId: %s", id.toString(), getUserId().toString()));
        return ResponseEntity.accepted().body(carService.editCar(carDto, id));
    }

    @GetMapping("/numbers")
    public ResponseEntity<List<NumberDescriptionDto>> getAllCarsNumbers() {
        log.info("Fetching all cars numbers userId: " + getUserId().toString());
        return ResponseEntity.ok().body(carService.getNumbers());
    }
}

