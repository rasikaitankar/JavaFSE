package example;

public class Test {

    public static void main(String[] args) {

        EmployeeManagement manager = new EmployeeManagement(10);

        manager.addEmployee( new Employee(101,"Rahul","Developer", 60000));
        manager.addEmployee( new Employee(102, "Amit","Tester", 45000));
        manager.addEmployee( new Employee(103, "Neha", "Manager", 90000));
        System.out.println("Employee List\n");

        manager.displayEmployees();
        System.out.println("Searching Employee 102\n");

        Employee employee = manager.searchEmployee(102);
        if(employee != null)
            System.out.println(employee);
        else
            System.out.println("Employee Not Found.");
        System.out.println("Deleting Employee 102\n");
        manager.deleteEmployee(102);
        System.out.println("Updated Employee List\n");
        manager.displayEmployees();
    }
}