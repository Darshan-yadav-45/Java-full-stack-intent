# Mini Student Management System

## Overview
The **Mini Student Management System** is a lightweight, efficient console-based application built using **Core Java**. It implements modern **Java 8+ features** along with core Object-Oriented Programming (OOP) principles to provide a clean and robust architecture for managing student data.

## Features
- **Add new students** to the system with their details and enrolled subjects.
- **Display all students** with their complete profiles.
- **Search for a student** efficiently using their unique ID.
- **Update student details** such as course and marks dynamically.
- **Delete a student** from the system securely.
- **Filter students** based on specific criteria (e.g., by course, above specific marks).
- **Sort students** alphabetically by their names.
- **Calculate average marks** of all students in the system.
- **Robust error handling** using custom exceptions for non-existent students.

## Technologies
- **Language:** Java (JDK 8 or higher)
- **Concepts:** Core Java, Collections Framework, Stream API, Lambda Expressions

## Concepts Demonstrated
This project is built to demonstrate practical implementation of advanced Core Java concepts:
- **OOP Principles:** Encapsulation, Inheritance, Abstraction, Polymorphism.
- **Collections:** `List` (ArrayList), `Set` (HashSet), `Map` (HashMap).
- **Exception Handling:** Custom checked exception `StudentNotFoundException`.
- **Java 8+ Features:** Stream API, Lambda Expressions, `Optional` class.

## Project Structure
```
StudentManagement/
│
├── src/
│   ├── Main.java                        # Entry point of the application
│   ├── Person.java                      # Abstract base class
│   ├── Student.java                     # Concrete class extending Person
│   ├── Printable.java                   # Interface for printing operations
│   ├── StudentService.java              # Interface defining business operations
│   ├── StudentManagementService.java    # Implementation of StudentService
│   └── StudentNotFoundException.java    # Custom Exception class
│
├── README.md                            # GitHub repository documentation
├── PROJECT_REPORT.md                    # Detailed MCA College Project Report
└── .gitignore                           # Excluded files for git
```

## How to Run

### For Windows:
Open your command prompt or terminal and follow these steps:

```bash
# Navigate to the source code folder
cd StudentManagement/src

# Compile all Java files
javac *.java

# Run the Main class
java Main
```

## Sample Output
```text
==================================================
   Mini Student Management System Started...      
==================================================

[1] Adding Students...
Success: Student added -> Alice Smith

[2] Display All Students...
-----------------------------
Student ID    : 101
Name          : Alice Smith
Age           : 21
Course        : MCA
Marks         : 85.5
Subjects      : [Java, Database Systems, Data Structures]
-----------------------------

[3] Search Student by ID (102)...
Student found:
...
```

## Java Concepts
- **Encapsulation:** Variables in `Student` and `Person` are private and accessed through public getters/setters.
- **Inheritance:** `Student` extends the abstract class `Person`.
- **Interfaces:** `StudentManagementService` implements `StudentService` and `Printable`.
- **Stream API:** Used to elegantly filter and sort students without writing manual loops.
- **Optional:** Used in `searchStudentById` to prevent `NullPointerException` when a student isn't found.

## Testing
The system includes robust error handling to test various scenarios like attempting to update or delete non-existent students, or handling missing data seamlessly. See `PROJECT_REPORT.md` for a complete list of test cases.

## Future Enhancements
- Integration with MySQL database via JDBC or Spring Data JPA.
- Building a full REST API using Spring Boot.
- Developing a frontend client in React.js or Angular.
- Implementing role-based user authentication and login.

## Author
Developed as part of the MCA college internship/training program.
