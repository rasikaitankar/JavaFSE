package example;

import java.util.HashMap;
import java.util.HashSet;
import java.util.Set;

public class CustomerRepositoryImpl implements CustomerRepository{

	HashMap<Integer,String> customer = new HashMap<>();
	
	public CustomerRepositoryImpl() {
		customer.put(1,"John");
		customer.put(2,"Riya");
		customer.put(3,"Rasika");
	}
	
	@Override
	public String findCustomerById(int id) {
		// TODO Auto-generated method stub
		
		return customer.getOrDefault(id, "No customer found");
	}

}
