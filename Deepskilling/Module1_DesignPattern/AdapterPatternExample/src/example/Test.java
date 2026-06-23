package example;

public class Test {
	public static void main(String[] args) {
		PaymentProcessor gpay = new GPayAdapter();
		
		PaymentProcessor paytm = new PaytmAdapter();
		
		PaymentProcessor bhim = new BhimAdapter();
		
		gpay.processPayment();
		paytm.processPayment();
		bhim.processPayment();
	}
}
