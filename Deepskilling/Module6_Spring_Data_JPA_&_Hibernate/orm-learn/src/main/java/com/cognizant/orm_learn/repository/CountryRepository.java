package com.cognizant.orm_learn.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cognizant.orm_learn.model.Country;

//findAll(),findById(),save(),delete(),count(),existsById()
@Repository
public interface CountryRepository extends JpaRepository<Country,String>{

	//Query Method 1
	List<Country> findByNameContaining(String text);
	
	//Query Method 2
	List<Country> findByNameContainingOrderByNameAsc(String text);
	
	//Query Method 3
	List<Country> findByNameStartingWith(String alphabet);
	
}
