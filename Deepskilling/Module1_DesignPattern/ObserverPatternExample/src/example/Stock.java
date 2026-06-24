package example;

public interface Stock {
	void register(Observer n);
	void deregister(Observer os);
	void notifyObservers();
}
