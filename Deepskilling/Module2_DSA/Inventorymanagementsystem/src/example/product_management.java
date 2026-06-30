package example;

import java.util.HashMap;
import java.util.Map;

public class product_management {

    private Map<Integer, Product> products;
    public product_management() {
    	products = new HashMap<>();
    }

    public void addProduct(Product product) {
    	products.put(product.getProductId(), product);
        System.out.println("Product Added Successfully.\n");
    }

    public void updateProduct(int id,String name,int quantity,double price) {
        Product product = products.get(id);
        if(product != null) {
            product.setProductName(name);
            product.setQuantity(quantity);
            product.setPrice(price);
            System.out.println("Product Updated Successfully.\n");
        }
        else {
            System.out.println("Product Not Found.\n");
        }
    }

    public void deleteProduct(int id) {
        if(products.remove(id) != null) {
            System.out.println("Product Deleted Successfully.\n");
        }
        else {
            System.out.println("Product Not Found.\n");
        }
    }
    public void displayProducts() {

        if(products.isEmpty()) {
            System.out.println("Inventory Empty.");
            return;
        }
        for(Product product : products.values()) {
            System.out.println(product);
        }
    }
}