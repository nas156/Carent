package com.project.carent.car;

import com.project.carent.car.dto.CarDto;
import com.project.carent.car.dto.FetchCarDto;
import com.project.carent.car.dto.NumberDescriptionDto;
import com.project.carent.exception.CarNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;


@Service
public class CarService {

    final CarRepository carRepository;

    @Autowired
    public CarService(CarRepository carRepository) {
        this.carRepository = carRepository;
    }

    public List<FetchCarDto> getAllCars() {
        return carRepository.getAllCars();
    }

    public UUID addCar(CarDto car) {
        return carRepository.save(Car.fromDto(car)).getId();
    }

    public Car getCarById(UUID id) {
        return carRepository.findById(id).orElseThrow(() -> new CarNotFoundException(id.toString()));
    }

    public Car getCarByNumber(Integer number) {
        return carRepository.findCarByNumber(number).orElseThrow(() -> new CarNotFoundException(number.toString()));
    }

    public UUID deleteCarById(UUID id) {
        carRepository.deleteById(id);
        return id;
    }

    public CarDto editCar(CarDto carDto, UUID id) {
        carRepository.editCar(id,
                carDto.getNumber(),
                carDto.getDescription(),
                carDto.getRentalCost());
        return carDto;
    }

    public List<NumberDescriptionDto> getNumbers() {
        return carRepository.getAllNumbers();
    }
}
