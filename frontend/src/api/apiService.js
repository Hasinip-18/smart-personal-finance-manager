/**
 * REST API Client Service for communicating with Spring Boot Backend.
 * Standardizes fetch calls, error handling, and baseUrl configuration.
 */

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080/api';

export const apiService = {
  /**
   * Health Check: queries the Spring Boot backend system status.
   */
  async getHealth() {
    try {
      const response = await fetch(`${API_BASE_URL}/health`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP Error: ${response.status} ${response.statusText}`);
      }

      return await response.json();
    } catch (error) {
      console.error('Error fetching backend health:', error);
      throw error;
    }
  },
};

export default apiService;
