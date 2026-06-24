package example;

public class CustomerService{

	private CustomerRepository crepo;
	public CustomerService(CustomerRepository crepo) {
		this.crepo = crepo;
	}
	
	public void getCustomer(int id) {
		String customer = crepo.findCustomerById(id);
		System.out.println("Customer Details : "+customer);
	}
}
