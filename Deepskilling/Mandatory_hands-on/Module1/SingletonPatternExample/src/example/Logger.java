package example;

public class Logger {
	private static Logger instance;
	private int data;
	private Logger() {
		//private constructor
		data = 1;
	}
	//Lazy Initialization Singleton
	public static Logger getInstance() {
		if(instance == null) {
			instance = new Logger();
		}
		return instance;
	}
	//Thread safe using Synchronized Singleton 
//	public static synchronized Logger getInstance() {
//		if(instance == null)
//		{
//			instance = new Logger();
//		}
//		return instance;
//	}
	
	//Double Checking Method
//	public static Logger getInstance() {
//		if(instance == null) {
//			synchronized (Logger.class) {
//				if(instance==null) {
//					instance = new Logger();
//				}
//			}
//		}
//		return instance;
//	}
	public int getData() {
		return data;
	}
}