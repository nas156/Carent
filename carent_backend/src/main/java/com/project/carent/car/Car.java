package com.project.carent.car;

import com.project.carent.car.dto.CarDto;
import com.project.carent.order.Order;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.util.List;
import java.util.UUID;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "cars")
@Entity
public class Car {

    @Id
    @GeneratedValue(generator = "UUID")
    @GenericGenerator(name = "UUID", strategy = "org.hibernate.id.UUIDGenerator")
    @Column(name = "id", updatable = false, nullable = false)
    private UUID id;

    @Column(name = "number", unique = true)
    private Integer number;

    @Column(name = "description")
    private String description;

    @Column(name = "rental_cost")
    private Integer rentalCost;

    @OneToMany(mappedBy = "car", cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    private List<Order> orders;

    public static Car fromDto(CarDto carDTO) {
        return Car
                .builder()
                .rentalCost(carDTO.getRentalCost())
                .number(carDTO.getNumber())
                .description(carDTO.getDescription())
                .build();
    }
}
