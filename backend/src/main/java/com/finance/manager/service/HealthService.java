package com.finance.manager.service;

import com.finance.manager.dto.HealthResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.sql.DataSource;
import java.sql.Connection;
import java.time.LocalDateTime;

/**
 * Business Logic Layer: Service responsible for system health and connectivity checks.
 */
@Service
public class HealthService {

    private final DataSource dataSource;

    @Autowired
    public HealthService(DataSource dataSource) {
        this.dataSource = dataSource;
    }

    public HealthResponse getSystemHealth() {
        String dbStatus = checkDatabaseConnection();
        String appStatus = "UP".equals(dbStatus) ? "HEALTHY" : "DEGRADED";
        String message = "Smart Personal Finance Manager Backend is running successfully.";

        return new HealthResponse(appStatus, message, dbStatus, LocalDateTime.now());
    }

    private String checkDatabaseConnection() {
        if (dataSource == null) {
            return "DATASOURCE_NOT_CONFIGURED";
        }
        try (Connection connection = dataSource.getConnection()) {
            return connection.isValid(2) ? "UP" : "DOWN";
        } catch (Exception e) {
            return "DOWN (" + e.getMessage() + ")";
        }
    }
}
