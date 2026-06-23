package example;

public class Test {
	public static void main(String[] args) {
		Computer office = new Computer.Builder("Intel i3").setRAM("4 GB").build();
		System.out.println(office);
		
		Computer gaming = new Computer.Builder("Intel i7").setRAM("32 GB").setStorage("512 GB SSD").build();
		System.out.println(gaming);
	}
}
