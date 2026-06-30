package example;

public class Test {

    public static void main(String[] args) {

        Order[] orders = { new Order(101,"Rahul",3500),
                new Order(102,"Amit",1800),
                new Order(103,"Priya",5200),
                new Order(104,"Neha",1200),
                new Order(105,"Rohan",7000)
        };

        SortingOperations sort = new SortingOperations();

        System.out.println("Original Orders\n");
        sort.display(orders);
        System.out.println("Bubble Sort\n");
        sort.bubbleSort(orders);
        sort.display(orders);
        Order[] quickOrders = { new Order(101,"Rahul",3500),
                new Order(102,"Amit",1800),
                new Order(103,"Priya",5200),
                new Order(104,"Neha",1200),
                new Order(105,"Rohan",7000)};
        System.out.println("Quick Sort\n");
        sort.quickSort(quickOrders,0,quickOrders.length - 1);
        sort.display(quickOrders);
    }
}