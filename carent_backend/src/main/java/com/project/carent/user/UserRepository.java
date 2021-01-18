package com.project.carent.user;

import com.project.carent.user.dto.FetchUserDto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.util.List;
import java.util.UUID;

@Repository
public interface UserRepository extends JpaRepository<User, UUID> {
    @Query(value = "select u.id as id, u.addDate as addDate, u.passportNumber as passportNumber, " +
            "u.firstName as firstName, u.lastName as lastName," +
            "size(u.orders) as numberOfOrders from User u order by u.editDate")
    List<FetchUserDto> getAllUsers();

    @Modifying
    @Transactional
    @Query(value = "update User u set u.firstName = :firstName, u.lastName = :lastName," +
            "u.passportNumber = :passportNumber, u.password = :password, u.editDate = :date where u.id = :id")
    void editUser(UUID id, String firstName, String lastName, Integer passportNumber, String password, LocalDate date);
}
