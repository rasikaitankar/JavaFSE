package com.library.service;

import com.library.repository.BookRepository;

public class BookService {

	private BookRepository bookRepo;
	
	//Setter Injection
	public void setBookRepository(BookRepository bookRepo) {
		this.bookRepo =  bookRepo;
	}
	
	public void displayBook() {
		System.out.println("Book : "+bookRepo.getBook());
	}
}
