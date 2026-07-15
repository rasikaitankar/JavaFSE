package com.cognizant.orm_relationship.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.cognizant.orm_relationship.entity.Department;
import com.cognizant.orm_relationship.repository.DepartmentRepository;

@Service
public class DepartmentService {

	@Autowired
	private DepartmentRepository departmentRepository;
	
	@Transactional
	public Department get(int id) {
		return departmentRepository.findById(id).get();
	}
	
	@Transactional
	public void save(Department employee) {
		departmentRepository.save(employee);
	}
}
