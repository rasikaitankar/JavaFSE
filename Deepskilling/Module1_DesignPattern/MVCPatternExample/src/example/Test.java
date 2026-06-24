package example;

public class Test {
	public static void main(String[] args) {
		Student studentmodel = new Student("Rasika",101,"A");
		StudentView studentView = new StudentView();
		StudentController studentController = new StudentController(studentmodel,studentView);
	
		studentController.updateView();
		studentController.setGrade("B");
		studentController.updateView();
	}	
}
