package com.project.carent.client;

import com.project.carent.client.dto.PassportNameDto;
import com.project.carent.client.dto.FetchClientDto;
import com.project.carent.client.dto.ClientDto;
import com.project.carent.exception.NotFoundException;
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
        return clientRepository.findById(id).orElseThrow(() -> new NotFoundException("Client not found id: " + id.toString()));
    }

    public Client getUserByPassport(Integer passport) {
        return clientRepository.findUserByPassportNumber(passport).orElseThrow(() -> new NotFoundException("Client not found id: " + passport));
    }

    public UUID deleteClientById(UUID id) {
        clientRepository.deleteById(id);
        return id;
    }

    public UUID addClient(ClientDto clientDto) {
        var user = Client.fromDto(clientDto);
        user.setAddDate(LocalDate.now());
        return clientRepository.save(user).getId();
    }

    public List<FetchClientDto> getAllClients() {
        return clientRepository.getAllUsers();
    }

    public ClientDto editClient(UUID id, ClientDto clientDto) {
        clientRepository.editUser(id, clientDto.getFirstName(),
                clientDto.getLastName(), clientDto.getPassportNumber(), LocalDate.now());
        return clientDto;
    }

    public List<PassportNameDto> getPassports() {
        return clientRepository.getAllPassports();
    }
}
