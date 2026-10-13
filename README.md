# Smart Personal Finance Manager

A web application designed for the subject **Software Application and Architecture**, built using a **3-Tier Layered Architecture**.

---

## 🏛️ Architecture Overview

The application strictly implements a **3-Tier Layered Architecture**:

1. **Presentation Layer (`frontend/`)**:
   - Built with **React 19** and **Vite**.
   - Handles the user interface, presentation state, and asynchronous REST API communication.
   - Configured with Vite proxy (`/api` &rarr; `http://localhost:8080`) and responsive CSS.

2. **Business Logic Layer (`backend/src/main/java/com/finance/manager/service/` & `controller/`)**:
   - Built with **Java 17** and **Spring Boot 3**.
   - Contains controllers (`HealthController`) that expose REST endpoints.
   - Dedicated service layer (`HealthService`) encapsulates core business logic, validations, and orchestration.
   - CORS is configured in `WebConfig` to permit frontend origins (`http://localhost:5173`, `http://localhost:3000`).

3. **Data Access Layer (`backend/src/main/java/com/finance/manager/repository/` & `entity/`)**:
   - Built with **Spring Data JPA** and **Hibernate**.
   - Interfaces define CRUD operations and queries over **MySQL 8+** (`smart_finance_db`).
   - Automatically handles schema migration and connection pooling with HikariCP.

---

## 📁 Project Directory Structure

```text
Smart-Personal-Finance-Manager/
├── .gitignore
├── README.md
├── backend/
│   ├── pom.xml
│   ├── mvnw
│   ├── mvnw.cmd
│   └── src/
│       ├── main/
│       │   ├── java/com/finance/manager/
│       │   │   ├── SmartFinanceManagerApplication.java
│       │   │   ├── config/
│       │   │   │   └── WebConfig.java               # CORS configuration
│       │   │   ├── controller/
│       │   │   │   └── HealthController.java        # Presentation/API Layer
│       │   │   ├── service/
│       │   │   │   └── HealthService.java           # Business Logic Layer
│       │   │   ├── repository/                      # Data Access Layer (Spring Data JPA)
│       │   │   ├── entity/                          # JPA Database Entities
│       │   │   └── dto/
│       │   │       └── HealthResponse.java          # API Data Transfer Object
│       │   └── resources/
│       │       └── application.properties           # MySQL, JPA & Server configuration
│       └── test/
│           └── java/com/finance/manager/
│               ├── SmartFinanceManagerApplicationTests.java
│               └── controller/
│                   └── HealthControllerTest.java    # Integration & Endpoint tests
└── frontend/
    ├── package.json
    ├── vite.config.js                               # Vite & API proxy config
    ├── index.html
    └── src/
        ├── main.jsx                                 # React DOM entrypoint
        ├── App.jsx                                  # Main App shell
        ├── index.css                                # Clean modern styles
        ├── api/
        │   └── apiService.js                        # Reusable REST API client
        └── components/
            ├── Navbar.jsx                           # Application header
            ├── HealthStatusCard.jsx                 # Live health & connectivity test card
            ├── ModuleRoadmapCard.jsx                # Module roadmap overview
            └── ArchitectureOverview.jsx             # 3-tier architecture visualization
```

---

## ⚙️ Prerequisites

- **Java**: Java 17+ (e.g., Eclipse Temurin 17 or OpenJDK 17)
- **Node.js**: Node 18+ and npm
- **MySQL**: MySQL 8.0+ running on port `3306`

---

## 🚀 Running the Application Locally

### 1. Database Setup (MySQL)

Ensure MySQL is running locally:
```bash
# macOS (Homebrew):
brew services start mysql
```

The database `smart_finance_db` is configured in `backend/src/main/resources/application.properties`.
If your MySQL root user has a password, set it in `application.properties` or set the environment variable:
```bash
export SPRING_DATASOURCE_USERNAME=root
export SPRING_DATASOURCE_PASSWORD=your_password
```

### 2. Start the Backend (Spring Boot)

Open a terminal and run:
```bash
cd backend
export JAVA_HOME="/Library/Java/JavaVirtualMachines/temurin-17.jdk/Contents/Home"
./mvnw spring-boot:run
```
*The backend starts at `http://localhost:8080`.*

To test the health-check endpoint directly:
```bash
curl http://localhost:8080/api/health
```

### 3. Start the Frontend (React + Vite)

Open a second terminal and run:
```bash
cd frontend
npm run dev
```
*The React UI starts at `http://localhost:5173`.*

Open your browser to `http://localhost:5173`. Click **"Test Backend Connection"** to verify that the React UI communicates with the Spring Boot backend and confirms that MySQL is connected.

---

## 🧪 Testing

Run backend unit and integration tests:
```bash
cd backend
./mvnw test
```
