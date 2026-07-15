package com.cognizant.orm_learn;



import java.time.LocalDate;

import java.util.Calendar;
import java.util.Date;
import java.util.List;

import org.slf4j.Logger;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ConfigurableApplicationContext;

import com.cognizant.orm_learn.model.Country;
import com.cognizant.orm_learn.model.Stock;
import com.cognizant.orm_learn.repository.StockRepository;
import com.cognizant.orm_learn.service.CountryService;

@SpringBootApplication
public class OrmLearnApplication {

	private static final Logger LOGGER = org.slf4j.LoggerFactory.getLogger(OrmLearnApplication.class);
	
	private static CountryService countryService;
	
	private static StockRepository stockRepository;
	
	public static void main(String[] args) {
		
		ConfigurableApplicationContext context = SpringApplication.run(OrmLearnApplication.class, args);
		LOGGER.info("Inside main");
		
		countryService = context.getBean(CountryService.class);
		
		testGetAllCountries();
	
		testGetCountry();
		
		testAddCountry();
		
		testSearchCountries();
		
		testSearchCountriesSorted();
		
		testSearchCountriesStartingWith();
		
		stockRepository = context.getBean(StockRepository.class);
		
		testFacebookSeptember();
		
		testGoogleAbove1250();
		
		testTopVolume();
		
		testLowestNetflix();
	}
	
	private static void testGetAllCountries() {
		
		LOGGER.info("Start");
		
		List<Country> countries = countryService.getAllCountries();
		
		LOGGER.debug("countries = {}",countries);
		
		LOGGER.info("End");
	}

	private static void testGetCountry() {
		
		LOGGER.info("Start");
		
		Country country = countryService.getCountry("IN");
		
		LOGGER.debug("Country = {}",country);
		
		LOGGER.info("End");
	}
	
	private static void testAddCountry() {
		LOGGER.info("Start");
		
		Country country = new Country();
		
		country.setCode("JP");
		country.setName("Japan");
		
		countryService.addCountry(country);
		
		LOGGER.info("Country Added Successfully");
		
		LOGGER.info("End");
	}
	
	private static void testSearchCountries() {
		LOGGER.info("Start");
		
		List<Country> countries = countryService.searchCountries("ia");
		
		LOGGER.debug("Countries : {}",countries);
		
		LOGGER.info("End");
	}
	
	private static void testSearchCountriesSorted() {
		LOGGER.info("Start");
		
		List<Country> countries = countryService.searchCountriesSorted("a");
		
		LOGGER.debug("Countries : {}",countries);
		
		LOGGER.info("End");
	}
	
	private static void testSearchCountriesStartingWith() {
		LOGGER.info("Start");
		
		List<Country> countries = countryService.searchCountriesStartingWith("J");
		
		LOGGER.debug("Countries : {}",countries);
		
		LOGGER.info("End");
	}
	
	private static void testFacebookSeptember() {
		LOGGER.info("Start");
		
//		Calendar c = Calendar.getInstance();
//		
//		c.set(2019, Calendar.SEPTEMBER,1);
//		
//		Date start = c.getTime();
//		
//		c.set(2019, Calendar.SEPTEMBER,30);
//		Date end = c.getTime();
//		
		LocalDate start = LocalDate.of(2019, 9, 1);
		LocalDate end = LocalDate.of(2019, 9, 30);
		List<Stock> stocks = stockRepository.findByCodeAndDateBetween("FB", start, end);
		
		LOGGER.debug("{}",stocks);
		
		LOGGER.info("End");
	}
	
	private static void testGoogleAbove1250() {
		LOGGER.info("Start");
		
		List<Stock> stocks = stockRepository.findByCodeAndCloseGreaterThan("GOOGL", 1250);
		
		LOGGER.debug("{}",stocks);
		
		LOGGER.info("End");
	}
	
	private static void testTopVolume() {

	    LOGGER.info("Start");

	    List<Stock> stocks =
	            stockRepository.findTop3ByOrderByVolumeDesc();

	    LOGGER.debug("{}",stocks);

	    LOGGER.info("End");
	}
	
	private static void testLowestNetflix() {

	    LOGGER.info("Start");

	    List<Stock> stocks =
	            stockRepository.findTop3ByCodeOrderByCloseAsc("NFLX");

	    LOGGER.debug("{}",stocks);

	    LOGGER.info("End");
	}
}
