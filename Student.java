import java.util.HashSet;
import java.util.Set;

public class Student extends Person {
    private int id;
    private String course;
    private double marks;
    
    // Using Set Collection to prevent duplicate subjects
    private Set<String> subjects;

    public Student(int id, String name, int age, String course, double marks) {
        super(name, age);
        this.id = id;
        this.course = course;
        this.marks = marks;
        this.subjects = new HashSet<>();
    }

    // Getters and setters (Encapsulation)
    public int getId() { return id; }
    public void setId(int id) { this.id = id; }

    public String getCourse() { return course; }
    public void setCourse(String course) { this.course = course; }

    public double getMarks() { return marks; }
    public void setMarks(double marks) { this.marks = marks; }

    public Set<String> getSubjects() { return subjects; }

    // Method Overloading: Same method name, different parameters
    public void addSubject(String subject) {
        this.subjects.add(subject);
    }

    public void addSubject(String subject1, String subject2) {
        this.subjects.add(subject1);
        this.subjects.add(subject2);
    }

    // Method Overriding: Providing specific implementation for abstract method
    @Override
    public void displayDetails() {
        System.out.println("-----------------------------");
        System.out.println("Student ID    : " + id);
        System.out.println("Name          : " + getName());
        System.out.println("Age           : " + getAge());
        System.out.println("Course        : " + course);
        System.out.println("Marks         : " + marks);
        System.out.println("Subjects      : " + subjects);
        System.out.println("-----------------------------");
    }
    
    @Override
    public String toString() {
        return "Student[ID=" + id + ", Name=" + getName() + ", Course=" + course + ", Marks=" + marks + "]";
    }
}
