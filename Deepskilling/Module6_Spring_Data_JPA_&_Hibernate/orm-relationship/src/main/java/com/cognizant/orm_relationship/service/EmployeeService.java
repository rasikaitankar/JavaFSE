package com.cognizant.orm_relationship.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.cognizant.orm_relationship.entity.Employee;
import com.cognizant.orm_relationship.repository.EmployeeRepository;

@Service
public class EmployeeService {

	
	@Autowired
	private EmployeeRepository employeeRepository;
	
	public List<Employee> searchEmployee(Boolean permanent){
		return employeeRepository.searchEmployee(permanent);
	}
	
	
	public List<Employee> getAllPermanentEmployees(){
			return employeeRepository.getAllPermanentEmployees();
	}
	
	public double getAverageSalary(int id) {
		return employeeRepository.getAverageSalary(id);
	}
	
	public List<Employee> getAllEmployeeNative(){
		return employeeRepository.getAllEmployeesNative();
	}
	
	@Transactional
	public Employee get(int id) {
		return employeeRepository.findById(id).get();
	}
	
	@Transactional
	public void save(Employee employee) {
		employeeRepository.save(employee);
	}
}
