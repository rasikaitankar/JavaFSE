package example;

public class Test {
	public static void main(String[] args) {
		
		Light light = new Light();
		Command lightOn = new LightOnCommand(light);
		Command lightOff = new LightOffCommand(light);
		
		RemoteControl r = new RemoteControl();
		r.setCommand(lightOn);
		
		r.pressButton();
		
		r.setCommand(lightOff);
		
		r.pressButton();
	}
}
