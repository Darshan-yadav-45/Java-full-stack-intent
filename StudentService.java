import java.util.List;
import java.util.Optional;

public interface StudentService {
    void addStudent(Student student);
    Optional<Student> searchStudentById(int id);
    void updateStudent(int id, String course, double marks) throws StudentNotFoundException;
    void deleteStudent(int id) throws StudentNotFoundException;
    List<Student> findStudentsByCourse(String course);
    List<Student> findStudentsAboveMarks(double marks);
    List<Student> sortStudentsByName();
    double calculateAverageMarks();
}
