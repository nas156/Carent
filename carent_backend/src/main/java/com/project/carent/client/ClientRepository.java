package com.project.carent.client;

import com.project.carent.client.dto.FetchClientDto;
import com.project.carent.client.dto.PassportNameDto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Repository
public interface ClientRepository extends JpaRepository<Client, UUID> {
    @Query(value = "select c.id as id, c.addDate as addDate, c.passportNumber as passportNumber, " +
            "c.firstName as firstName, c.lastName as lastName," +
            "size(c.orders) as numberOfOrders from Client c order by c.editDate desc, c.addDate desc")
    List<FetchClientDto> getAllUsers();

    @Modifying
    @Transactional
    @Query(value = "update Client c set c.firstName = :firstName, c.lastName = :lastName," +
            "c.passportNumber = :passportNumber, c.editDate = :date where c.id = :id")
    void editUser(UUID id, String firstName, String lastName, Integer passportNumber, LocalDate date);

    @Query(value = "select c.passportNumber as passportNumber, c.fullName as name from Client c")
    List<PassportNameDto> getAllPassports();

    Optional<Client> findUserByPassportNumber(Integer passportNumber);
}
