package example;

public class Test {

    public static void main(String[] args) {

        TaskLinkedList taskList = new TaskLinkedList();
        taskList.addTask(new Task(101, "Design UI", "Pending"));
        taskList.addTask(new Task(102, "Write Backend", "In Progress"));
        taskList.addTask(new Task(103, "Testing", "Pending"));
        taskList.displayTasks();
        System.out.println("Searching Task 102");
        System.out.println(taskList.searchTask(102));
        System.out.println("Deleting Task 101");
        taskList.deleteTask(101);
        System.out.println();
        System.out.println("Remaining Tasks");
        taskList.displayTasks();
    }
}