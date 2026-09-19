# Employee Management System

A complete Java Full Stack internship project demonstrating Core Java, JDBC, SQL, React.js, HTML, and CSS skills.

## Architecture

*   **Frontend:** React.js (Vite), Vanilla CSS with custom glassmorphism design, React Router DOM, Axios, Lucide React icons.
*   **Backend:** Java, Spring Boot (used for REST structure), raw JDBC for database operations (no ORM/JPA to satisfy internship core skills requirement).
*   **Database:** MySQL

## Prerequisites

*   Java 17+
*   Node.js 18+
*   MySQL 8.0+
*   Maven

## Setup Instructions

### 1. Database Setup
1. Open MySQL Workbench or terminal.
2. Run the SQL script located at `database/schema.sql` to create the database and table.
3. Verify `employee_management` database is created.

### 2. Backend Setup
1. Navigate to the `backend` folder.
2. Open `src/main/resources/application.properties`.
3. Update the `spring.datasource.username` and `spring.datasource.password` to match your MySQL credentials.
4. Run the Spring Boot application using your IDE or via terminal:
   ```bash
   mvn spring-boot:run
   ```
5. The backend will run on `http://localhost:8080`.

### 3. Frontend Setup
1. Navigate to the `frontend` folder:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. The frontend will be accessible at `http://localhost:5173`.

## Features
- **Dashboard:** Overview of total employees, departments, and recently added employees.
- **Employee List:** View all employees in a tabular format with search and filter capabilities.
- **Add Employee:** Form validation for adding new employees.
- **Update Employee:** Edit existing employee records.
- **Delete Employee:** Remove employee records with a confirmation prompt.
- **Employee Details:** View complete details of a specific employee.

## API Endpoints
- `GET /api/employees` - Retrieve all employees
- `GET /api/employees/{id}` - Retrieve a single employee by ID
- `POST /api/employees` - Create a new employee
- `PUT /api/employees/{id}` - Update an existing employee
- `DELETE /api/employees/{id}` - Delete an employee
