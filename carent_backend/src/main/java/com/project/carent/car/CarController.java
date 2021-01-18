package com.project.carent.car;

import com.project.carent.car.dto.CarDto;
import com.project.carent.car.dto.FetchCarDto;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping(value = "/cars")
public class CarController {

    final CarService carService;

    public CarController(CarService carService) {
        this.carService = carService;
    }

    @GetMapping(value = "/all")
    public List<FetchCarDto> getAllCars() {
        return carService.getAllCars();
    }

    @PostMapping("/add")
    public ResponseEntity<?> addCar(@RequestBody CarDto car) {
        return ResponseEntity.accepted().body(carService.addCar(car));
    }

    @DeleteMapping(value = "/one")
    public ResponseEntity<?> deleteCar(@RequestParam UUID id) {
        return ResponseEntity.ok().body(carService.deleteCarById(id));
    }

    @PutMapping(value = "/edit")
    public ResponseEntity<?> editCar(@RequestBody CarDto carDto, @RequestParam UUID id) {
        return ResponseEntity.accepted().body(carService.editCar(carDto, id));
    }
}

