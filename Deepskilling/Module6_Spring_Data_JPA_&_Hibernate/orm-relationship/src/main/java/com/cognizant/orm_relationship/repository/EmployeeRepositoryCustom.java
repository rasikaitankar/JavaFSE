package com.cognizant.orm_relationship.repository;

import java.util.List;

import com.cognizant.orm_relationship.entity.Employee;

public interface EmployeeRepositoryCustom {
	
	List<Employee> searchEmployee(Boolean permanent);
}
