package com.finance.manager.controller;

import com.finance.manager.dto.HealthResponse;
import com.finance.manager.service.HealthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * Presentation Layer: REST Controller for health-check and connectivity endpoints.
 */
@RestController
@RequestMapping("/api/health")
public class HealthController {

    private final HealthService healthService;

    @Autowired
    public HealthController(HealthService healthService) {
        this.healthService = healthService;
    }

    /**
     * Endpoint to verify backend status and database connectivity.
     * Accessible at: GET http://localhost:8080/api/health
     */
    @GetMapping
    public ResponseEntity<HealthResponse> getHealth() {
        HealthResponse response = healthService.getSystemHealth();
        return ResponseEntity.ok(response);
    }
}
