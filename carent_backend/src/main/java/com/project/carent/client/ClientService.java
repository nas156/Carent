package com.project.carent.client;

import com.project.carent.exception.UserNotFoundException;
import com.project.carent.client.dto.FetchClientDto;
import com.project.carent.client.dto.ClientDto;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;
import java.util.UUID;

@Service
public class ClientService {

    final ClientRepository clientRepository;

    public ClientService(ClientRepository clientRepository) {
        this.clientRepository = clientRepository;
    }

    public Client getUserById(UUID id) {
        return clientRepository.findById(id).orElseThrow(() -> new UserNotFoundException(id.toString()));
    }

    public Client getUserByPassport(Integer passport) {
        return clientRepository.findUserByPassportNumber(passport).orElseThrow(() -> new UserNotFoundException(passport.toString()));
    }

    public UUID deleteUserById(UUID id) {
        clientRepository.deleteById(id);
        return id;
    }

    public UUID addUser(ClientDto clientDto) {
        var user = Client.fromDto(clientDto);
        user.setAddDate(LocalDate.now());
        return clientRepository.save(user).getId();
    }

    public List<FetchClientDto> getAllUsers() {
        return clientRepository.getAllUsers();
    }

    public ClientDto editUser(UUID id, ClientDto clientDto) {
        clientRepository.editUser(id, clientDto.getFirstName(),
                clientDto.getLastName(), clientDto.getPassportNumber(),
                clientDto.getPassword(), LocalDate.now());
        return clientDto;
    }

    public List<Integer> getPassports() {
        return clientRepository.getAllPassports();
    }
}
