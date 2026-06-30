package example;

public class TaskLinkedList {

    private Node head;

    public void addTask(Task task) {
        Node newNode = new Node(task);
        if(head == null) {
            head = newNode;
            return;
        }
        Node temp = head;
        while(temp.next != null) {
            temp = temp.next;
        }
        temp.next = newNode;
    }
    public Task searchTask(int taskId) {
        Node temp = head;
        while(temp != null) {
            if(temp.task.getTaskId() == taskId) {
                return temp.task;
            }
            temp = temp.next;
        }
        return null;
    }
    public void deleteTask(int taskId) {
        if(head == null) {
            System.out.println("Task List Empty");
            return;
        }
        if(head.task.getTaskId() == taskId) {
            head = head.next;
            System.out.println("Task Deleted");
            return;
        }
        Node current = head;
        while(current.next != null &&
                current.next.task.getTaskId() != taskId) {
            current = current.next;
        }
        if(current.next == null) {
            System.out.println("Task Not Found");
        }
        else {
            current.next = current.next.next;
            System.out.println("Task Deleted");
        }
    }
    public void displayTasks() {
        if(head == null) {
            System.out.println("No Tasks Available");
            return;
        }
        Node temp = head;
        while(temp != null) {
            System.out.println(temp.task);
            temp = temp.next;
        }
    }
}