package com.cognizant.orm_learn.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.cognizant.orm_learn.model.Country;
import com.cognizant.orm_learn.repository.CountryRepository;

@Service
public class CountryService {

	//dependency Injection
	@Autowired
	private CountryRepository countryRepository;
	
	@Transactional
	public List<Country> getAllCountries(){
		return countryRepository.findAll();
	}
	
	public Country getCountry(String code) {
		return countryRepository.findById(code).orElse(null);
	}
	
	@Transactional
	public void addCountry(Country country) {
		countryRepository.save(country);
	}
	
	@Transactional
	public List<Country> searchCountries(String text){
		return countryRepository.findByNameContaining(text);
	}
	
	@Transactional
	public List<Country> searchCountriesSorted(String text){
		return countryRepository.findByNameContainingOrderByNameAsc(text);
	}
	
	@Transactional
	public List<Country> searchCountriesStartingWith(String text){
		return countryRepository.findByNameStartingWith(text);
	}
}
