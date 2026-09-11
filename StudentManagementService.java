import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.stream.Collectors;

public class StudentManagementService implements StudentService, Printable {
    // Map collection for O(1) time complexity search by ID
    private Map<Integer, Student> studentMap;
    // List collection to maintain the ordered list of all students
    private List<Student> studentList;

    public StudentManagementService() {
        this.studentMap = new HashMap<>();
        this.studentList = new ArrayList<>();
    }

    @Override
    public void addStudent(Student student) {
        if (!studentMap.containsKey(student.getId())) {
            studentMap.put(student.getId(), student);
            studentList.add(student);
            System.out.println("Success: Student added -> " + student.getName());
        } else {
            System.out.println("Error: Student with ID " + student.getId() + " already exists!");
        }
    }

    @Override
    public Optional<Student> searchStudentById(int id) {
        // Using Java 8 Optional to avoid NullPointerException
        return Optional.ofNullable(studentMap.get(id));
    }

    @Override
    public void updateStudent(int id, String course, double marks) throws StudentNotFoundException {
        Student student = studentMap.get(id);
        if (student == null) {
            throw new StudentNotFoundException("Cannot update. Student with ID " + id + " not found.");
        }
        student.setCourse(course);
        student.setMarks(marks);
        System.out.println("Success: Student ID " + id + " updated successfully.");
    }

    @Override
    public void deleteStudent(int id) throws StudentNotFoundException {
        if (!studentMap.containsKey(id)) {
            // Throwing custom exception
            throw new StudentNotFoundException("Cannot delete. Student with ID " + id + " not found.");
        }
        Student student = studentMap.remove(id);
        studentList.remove(student);
        System.out.println("Success: Student ID " + id + " deleted successfully.");
    }

    @Override
    public List<Student> findStudentsByCourse(String course) {
        // Using Java 8 Stream API and Lambda Expressions for filtering
        return studentList.stream()
                .filter(student -> student.getCourse().equalsIgnoreCase(course))
                .collect(Collectors.toList());
    }

    @Override
    public List<Student> findStudentsAboveMarks(double marks) {
        // Java 8 Stream API
        return studentList.stream()
                .filter(student -> student.getMarks() > marks)
                .collect(Collectors.toList());
    }

    @Override
    public List<Student> sortStudentsByName() {
        // Java 8 Stream API - sorting
        return studentList.stream()
                .sorted((s1, s2) -> s1.getName().compareToIgnoreCase(s2.getName()))
                .collect(Collectors.toList());
    }

    @Override
    public double calculateAverageMarks() {
        // Java 8 Stream API - math operations
        return studentList.stream()
                .mapToDouble(Student::getMarks)
                .average()
                .orElse(0.0);
    }

    @Override
    public void printAllStudents() {
        if (studentList.isEmpty()) {
            System.out.println("No students found in the system.");
        } else {
            // Java 8 forEach with Lambda Expression
            studentList.forEach(student -> student.displayDetails());
        }
    }
}
