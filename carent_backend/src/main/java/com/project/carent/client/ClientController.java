package com.project.carent.client;

import com.project.carent.client.dto.FetchClientDto;
import com.project.carent.client.dto.ClientDto;
import com.project.carent.client.dto.PassportNameDto;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

import static com.project.carent.auth.TokenService.getUserId;

@Slf4j
@RestController
@RequestMapping("/clients")
public class ClientController {

    final ClientService clientService;

    public ClientController(ClientService clientService) {
        this.clientService = clientService;
    }

    @GetMapping(value = "/health-check")
    public String getTestMessage() {
        return "Ok";
    }

    @GetMapping(value = "/all")
    public List<FetchClientDto> getAllClients() {
        log.info("Fetching all clients userId: " + getUserId().toString());
        return clientService.getAllClients();
    }

    @PutMapping(value = "/edit")
    public ResponseEntity<?> editClient(@RequestParam UUID id, @RequestBody ClientDto clientDto) {
        log.info(String.format("Edit client clientId: %s, userId: %s", id.toString(), getUserId().toString()));
        return ResponseEntity.accepted().body(clientService.editClient(id, clientDto));
    }

    @DeleteMapping(value = "/one")
    public ResponseEntity<UUID> deleteById(@RequestParam UUID id) {
        log.info(String.format("Delete client clientId: %s, userId: %s", id.toString(), getUserId().toString()));
        return ResponseEntity.ok().body(clientService.deleteClientById(id));
    }

    @PostMapping("/add")
    public ResponseEntity<UUID> addClient(@RequestBody ClientDto clientDto) {
        log.info(String.format("Edit client userId: %s", getUserId().toString()));
        return ResponseEntity.accepted().body(clientService.addClient(clientDto));
    }

    @GetMapping("/passports")
    public ResponseEntity<List<PassportNameDto>> getAllClientsPassports() {
        log.info("Fetching all clients passports userId: " + getUserId().toString());
        return ResponseEntity.ok().body(clientService.getPassports());
    }
}
