package com.project.carent.order;

import com.project.carent.car.CarService;
import com.project.carent.order.dto.FetchOrderDto;
import com.project.carent.order.dto.OrderDto;
import com.project.carent.user.UserService;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;
import java.util.UUID;

@Service
public class OrderService {

    final OrderRepository orderRepository;
    final UserService userService;
    final CarService carService;

    public OrderService(OrderRepository orderRepository, UserService userService, CarService carService) {
        this.orderRepository = orderRepository;
        this.userService = userService;
        this.carService = carService;
    }

    public List<FetchOrderDto> getAllOrders() {
        return orderRepository.getAllOrders();
    }

    public UUID deleteOrderById(UUID id) {
        orderRepository.deleteById(id);
        return id;
    }

    public UUID createOrder(OrderDto orderDto) {
        var order = Order
                .builder()
                .car(carService.getCarByNumber(orderDto.getCarNumber()))
                .user(userService.getUserByPassport(orderDto.getUserPassport()))
                .addDate(LocalDate.now())
                .rentalTime(orderDto.getRentalTime())
                .build();
        return orderRepository.save(order).getId();
    }

}
