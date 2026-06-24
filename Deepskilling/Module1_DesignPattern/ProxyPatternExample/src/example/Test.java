package example;

public class Test {
	public static void main(String[] args) {
		Image image = new ProxyImage("sample.jpg");
		System.out.println("Proxy created");
		image.display();
		System.out.println();
		image.display();
	}
}
