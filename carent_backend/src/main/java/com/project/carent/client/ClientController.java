package com.project.carent.client;

import com.project.carent.client.dto.FetchClientDto;
import com.project.carent.client.dto.ClientDto;
import com.project.carent.client.dto.PassportNameDto;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

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
    public List<FetchClientDto> getAllUsers() {
        return clientService.getAllUsers();
    }

    @PutMapping(value = "/edit")
    public ResponseEntity<?> editUser(@RequestParam UUID id, @RequestBody ClientDto clientDto) {
        return ResponseEntity.accepted().body(clientService.editUser(id, clientDto));
    }

    @DeleteMapping(value = "/one")
    public ResponseEntity<UUID> deleteById(@RequestParam UUID id) {
        return ResponseEntity.ok().body(clientService.deleteUserById(id));
    }

    @PostMapping("/add")
    public ResponseEntity<UUID> addUser(@RequestBody ClientDto clientDto) {
        return ResponseEntity.accepted().body(clientService.addUser(clientDto));
    }

    @GetMapping("/passports")
    public ResponseEntity<List<PassportNameDto>> getAllUsersPassports() {
        return ResponseEntity.ok().body(clientService.getPassports());
    }
}
