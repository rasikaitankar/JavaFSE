package example;

public class EmployeeManagement {

    private Employee[] employees;
    private int count;

    public EmployeeManagement(int size) {
        employees = new Employee[size];
        count = 0;
    }
    public void addEmployee(Employee employee) {

        if(count < employees.length) {
            employees[count] = employee;
            count++;
            System.out.println("Employee Added Successfully.\n");
        }
        else {
            System.out.println("Employee Array is Full.\n");
        }
    }
    public Employee searchEmployee(int id) {
        for(int i = 0; i < count; i++) {
            if(employees[i].getEmployeeId() == id) {
                return employees[i];
            }
        }
        return null;
    }
    public void displayEmployees() {
        if(count == 0) {
            System.out.println("No Employees Found.\n");
            return;
        }
        for(int i = 0; i < count; i++) {
            System.out.println(employees[i]);
        }
    }
    public void deleteEmployee(int id) {
        int index = -1;
        for(int i = 0; i < count; i++) {
            if(employees[i].getEmployeeId() == id) {
                index = i;
                break;
            }
        }
        if(index == -1) {
            System.out.println("Employee Not Found.\n");
            return;
        }
        for(int i = index; i < count - 1; i++) {
            employees[i] = employees[i + 1];
        }
        employees[count - 1] = null;
        count--;
        System.out.println("Employee Deleted Successfully.\n");
    }
}