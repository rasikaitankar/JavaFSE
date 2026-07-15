package com.cognizant.spring_learn;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

@SpringBootApplication
public class SpringLearnApplication {

	public static void main(String[] args) {
		SpringApplication.run(SpringLearnApplication.class, args);
//		ApplicationContext context = new ClassPathXmlApplicationContext("date-format.xml");
		
//		displayCountry();
//		SimpleDateFormat format = context.getBean("dateFormat",SimpleDateFormat.class);
		
	}
	private static void displayCountry() {
		ClassPathXmlApplicationContext context = new ClassPathXmlApplicationContext("country.xml");
		
		Country country = context.getBean("country",Country.class);
		
		System.out.println(country);
		context.close();
	}

}
