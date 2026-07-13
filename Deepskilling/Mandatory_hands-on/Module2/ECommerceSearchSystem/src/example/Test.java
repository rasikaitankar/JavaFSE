package example;

public class Test {

    public static void main(String[] args) {

        Product[] products = {new Product(101,"Camera","Electronics"),
            new Product(102,"Laptop","Electronics"),
            new Product(103,"Mobile","Electronics"),
            new Product(104,"Shoes","Fashion"),
            new Product(105,"Watch","Accessories")
        };

        SearchOperations search = new SearchOperations();
        System.out.println("Linear Search\n");

        Product p1 = search.linearSearch(products,"Shoes");

        if(p1 != null)
            System.out.println(p1);
        else
            System.out.println("Product Not Found");
        System.out.println("\nBinary Search\n");
        Product p2 = search.binarySearch(products,"Laptop");
        if(p2 != null)
            System.out.println(p2);
        else
            System.out.println("Product Not Found");
    }
}