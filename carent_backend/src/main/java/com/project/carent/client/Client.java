package com.project.carent.client;

import com.project.carent.order.Order;
import com.project.carent.client.dto.ClientDto;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.Formula;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.List;
import java.util.UUID;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Table(name = "clients")
@Entity
public class Client {
    @Id
    @GeneratedValue(generator = "UUID")
    @GenericGenerator(name = "UUID", strategy = "org.hibernate.id.UUIDGenerator")
    @Column(name = "id", updatable = false, nullable = false)
    private UUID id;

    @Column(name = "passport_number", unique = true)
    private Integer passportNumber;

    @Column(name = "first_name")
    private String firstName;

    @Column(name = "last_name")
    private String lastName;

    @Column(name = "add_date")
    private LocalDate addDate;

    @Column(name = "edit_date")
    private LocalDate editDate;

    @Formula("concat(first_name, ' ', last_name)")
    private String fullName;

    @OneToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL, mappedBy = "client")
    private List<Order> orders;

    public static Client fromDto(ClientDto clientDto) {
        return Client
                .builder()
                .firstName(clientDto.getFirstName())
                .lastName(clientDto.getLastName())
                .passportNumber(clientDto.getPassportNumber())
                .build();
    }
}
