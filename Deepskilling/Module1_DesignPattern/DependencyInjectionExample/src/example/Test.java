package example;

public class Test {
	public static void main(String[] args) {
		CustomerRepository repo = new CustomerRepositoryImpl();
		
		CustomerService service = new CustomerService(repo);
		
		service.getCustomer(1);
		service.getCustomer(3);
		service.getCustomer(0);
	}
}
