package com.project.carent.order;

import com.project.carent.order.dto.FetchOrderDto;
import com.project.carent.order.dto.OrderDto;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

import static com.project.carent.auth.TokenService.getUserId;

@Slf4j
@RestController
@RequestMapping(value = "/orders")
public class OrderController {

    final OrderService orderService;

    public OrderController(OrderService orderService) {
        this.orderService = orderService;
    }

    @GetMapping(value = "/all")
    public ResponseEntity<List<FetchOrderDto>> getAllOrders() {
        log.info("Fetching all orders userId: " + getUserId().toString());
        return ResponseEntity.ok().body(orderService.getAllOrders());
    }

    @PostMapping(value = "/create")
    public ResponseEntity<?> createOrder(@RequestBody OrderDto orderDto) {
        log.info(String.format("Create order userId: %s", getUserId().toString()));
        return ResponseEntity.accepted().body(orderService.createOrder(orderDto));
    }

    @DeleteMapping(value = "/one")
    public ResponseEntity<?> deleteOrder(@RequestParam UUID id) {
        log.info(String.format("Delete order userId: %s, orderId: %s", getUserId().toString(), id.toString()));
        return ResponseEntity.ok().body(orderService.deleteOrderById(id));
    }
}
