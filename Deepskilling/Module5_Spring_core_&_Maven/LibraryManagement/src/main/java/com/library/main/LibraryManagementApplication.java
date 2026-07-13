package com.library.main;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.library.service.BookService;

public class LibraryManagementApplication {

	public static void main(String[] args) {
		
		//Load Spring XML Configuration
		ApplicationContext context = new ClassPathXmlApplicationContext("applicationContext.xml");
		
		//Get the Bean from spring container
		BookService service = context.getBean("bookService",BookService.class);
		
		//call the method
		service.displayBook();
		((ClassPathXmlApplicationContext)context).close();
		
	}
	
}
