package example;

public class PaymentContext {
	private PaymentStrategy strategy;
	public PaymentContext(PaymentStrategy strategy) {
		this.strategy = strategy;
	}
	public void setStrategy(PaymentStrategy strategy) {
		this.strategy = strategy;
	}
	public void pay(int amount) {
		if(strategy == null) {
			System.out.println("No strategy was selected");
		}
		strategy.pay(amount);
	}
}
