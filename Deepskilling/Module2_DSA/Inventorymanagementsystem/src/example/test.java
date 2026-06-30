package example;

public class test {

    public static void main(String[] args) {

    	product_management manager = new product_management();

        Product p1 = new Product(101,"Laptop",20,65000);

        Product p2 = new Product(102,"Keyboard",100,1200);

        Product p3 = new Product(103,"Mouse",50,800);

        manager.addProduct(p1);
        manager.addProduct(p2);
        manager.addProduct(p3);

        System.out.println("Current Inventory\n");
        manager.displayProducts();

        manager.updateProduct(102,"Mechanical Keyboard",80,2500);

        manager.deleteProduct(103);

        System.out.println("Updated Inventory\n");

        manager.displayProducts();
    }
}