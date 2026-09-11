import java.util.List;
import java.util.Optional;

public class Main {
    public static void main(String[] args) {
        System.out.println("==================================================");
        System.out.println("   Mini Student Management System Started...      ");
        System.out.println("==================================================");

        StudentManagementService service = new StudentManagementService();

        // 1. Add students
        System.out.println("\n[1] Adding Students...");
        Student s1 = new Student(101, "Alice Smith", 21, "MCA", 85.5);
        s1.addSubject("Java");
        s1.addSubject("Data Structures", "Database Systems"); // Method overloading

        Student s2 = new Student(102, "Bob Johnson", 22, "BCA", 75.0);
        s2.addSubject("C++");
        s2.addSubject("Operating Systems");

        Student s3 = new Student(103, "Charlie Brown", 21, "MCA", 92.0);
        s3.addSubject("Java", "Artificial Intelligence");

        service.addStudent(s1);
        service.addStudent(s2);
        service.addStudent(s3);

        // 2. Display all students
        System.out.println("\n[2] Display All Students...");
        service.printAllStudents();

        // 3. Search student by ID (Using Optional)
        System.out.println("\n[3] Search Student by ID (102)...");
        Optional<Student> foundStudent = service.searchStudentById(102);
        foundStudent.ifPresent(student -> {
            System.out.println("Student found:");
            student.displayDetails();
        });

        System.out.println("\n[3] Search Student by ID (999) - Non-existent...");
        Optional<Student> notFound = service.searchStudentById(999);
        if (!notFound.isPresent()) {
            System.out.println("Result: Student with ID 999 not found.");
        }

        // 4. Find students by course
        System.out.println("\n[4] Find students by course (MCA)...");
        List<Student> mcaStudents = service.findStudentsByCourse("MCA");
        mcaStudents.forEach(s -> System.out.println("- " + s.getName() + " (" + s.getCourse() + ")"));

        // 5. Find students above a particular mark
        System.out.println("\n[5] Find students above 80 marks...");
        List<Student> topStudents = service.findStudentsAboveMarks(80.0);
        topStudents.forEach(s -> System.out.println("- " + s.getName() + " (" + s.getMarks() + ")"));

        // 6. Sort students by name
        System.out.println("\n[6] Sort students by name...");
        List<Student> sortedStudents = service.sortStudentsByName();
        sortedStudents.forEach(s -> System.out.println("- " + s.getName()));

        // 7. Calculate average marks
        System.out.println("\n[7] Calculate average marks...");
        double average = service.calculateAverageMarks();
        System.out.println("Result: Average Marks = " + String.format("%.2f", average));

        // 8. Update student & Exception Handling
        System.out.println("\n[8] Update Existing Student (101)...");
        try {
            service.updateStudent(101, "MCA", 89.0);
            System.out.println("After Update:");
            service.searchStudentById(101).get().displayDetails();
        } catch (StudentNotFoundException e) {
            System.out.println("Exception caught: " + e.getMessage());
        }

        System.out.println("\n[8] Update Non-Existing Student (500)...");
        try {
            service.updateStudent(500, "MBA", 70.0);
        } catch (StudentNotFoundException e) {
            System.out.println("Exception caught: " + e.getMessage());
        }

        // 9. Delete student & Exception Handling
        System.out.println("\n[9] Delete Existing Student (102)...");
        try {
            service.deleteStudent(102);
        } catch (StudentNotFoundException e) {
            System.out.println("Exception caught: " + e.getMessage());
        }

        System.out.println("\n[9] Delete Non-Existing Student (500)...");
        try {
            service.deleteStudent(500);
        } catch (StudentNotFoundException e) {
            System.out.println("Exception caught: " + e.getMessage());
        }

        System.out.println("\n[10] Final List of Students...");
        service.printAllStudents();
        
        System.out.println("==================================================");
        System.out.println("  Execution Completed. Thank you!                 ");
        System.out.println("==================================================");
    }
}
