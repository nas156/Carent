package com.project.carent.order;

import com.project.carent.order.dto.FetchOrderDto;
import com.project.carent.order.dto.OrderDto;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping(value = "/orders")
public class OrderController {

    final OrderService orderService;

    public OrderController(OrderService orderService) {
        this.orderService = orderService;
    }

    @GetMapping(value = "/all")
    public ResponseEntity<List<FetchOrderDto>> getAllOrders() {
        return ResponseEntity.ok().body(orderService.getAllOrders());
    }

    @PostMapping(value = "/create")
    public ResponseEntity<?> createOrder(@RequestBody OrderDto orderDto) {
        return ResponseEntity.accepted().body(orderService.createOrder(orderDto));
    }

    @DeleteMapping(value = "/one")
    public ResponseEntity<?> deleteOrder(@RequestParam UUID id) {
        return ResponseEntity.ok().body(orderService.deleteOrderById(id));
    }
}
