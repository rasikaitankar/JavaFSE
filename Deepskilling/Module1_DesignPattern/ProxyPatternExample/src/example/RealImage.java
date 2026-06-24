package example;

public class RealImage implements Image{

	private String fileName;
	
	public RealImage(String fileName) {
		this.fileName = fileName;
		loadFromServer();
	}

	private void loadFromServer() {
		System.out.println("Loading image from remote server: "+fileName);
	}
	@Override
	public void display() {
		// TODO Auto-generated method stub
		System.out.println("Display image : "+fileName);
	}

}
