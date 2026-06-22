package example;

public class test {
	public static void main(String[] args) {
		Logger firstInstance = Logger.getInstance();
		System.out.println(firstInstance.getData());
		Logger secondInstance = Logger.getInstance();
		System.out.println(secondInstance.getData());
		System.out.println("Check if both the instances are same or not : "+(firstInstance == secondInstance));
	}
}