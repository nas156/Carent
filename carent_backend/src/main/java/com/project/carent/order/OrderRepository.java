package com.project.carent.order;

import com.project.carent.order.dto.FetchOrderDto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.UUID;

@Repository
public interface OrderRepository extends JpaRepository<Order, UUID> {

    @Query(value = "select o.id as id, o.addDate as addDate, o.rentalTime as rentalTime," +
            "o.user.passportNumber as userPassport, o.car.number as carNumber," +
            "o.car.rentalCost as rentalCost from Order o order by o.addDate")
    List<FetchOrderDto> getAllOrders();

    @Transactional
    @Modifying
    @Query(value = "update Order o set o.car.id = :carId, o.user.id = :clientId, o.rentalTime = :rentalTime where o.id = :id")
    void editOrder(UUID id, UUID clientId, UUID carId, Integer rentalTime);
}
