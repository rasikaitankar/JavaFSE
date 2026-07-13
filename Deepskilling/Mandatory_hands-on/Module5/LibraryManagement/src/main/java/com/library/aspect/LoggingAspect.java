package com.library.aspect;

public class LoggingAspect {
	
	public void beforeMethod() {
		System.out.println("===== Before displayBook() =====");
		
	}
	public void afterMethod() {
		System.out.println("===== After displayBook() =====");
	}
}
