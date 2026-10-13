package com.finance.manager.dto;

import java.time.LocalDateTime;

/**
 * Data Transfer Object for API Health status check.
 */
public class HealthResponse {

    private String status;
    private String message;
    private String databaseStatus;
    private LocalDateTime timestamp;

    public HealthResponse() {
    }

    public HealthResponse(String status, String message, String databaseStatus, LocalDateTime timestamp) {
        this.status = status;
        this.message = message;
        this.databaseStatus = databaseStatus;
        this.timestamp = timestamp;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public String getDatabaseStatus() {
        return databaseStatus;
    }

    public void setDatabaseStatus(String databaseStatus) {
        this.databaseStatus = databaseStatus;
    }

    public LocalDateTime getTimestamp() {
        return timestamp;
    }

    public void setTimestamp(LocalDateTime timestamp) {
        this.timestamp = timestamp;
    }
}
