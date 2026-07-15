package com.cognizant.orm_relationship;

import org.springframework.boot.SpringApplication;

import org.springframework.boot.autoconfigure.SpringBootApplication;

import org.springframework.context.ApplicationContext;

import com.cognizant.orm_relationship.entity.Department;
import com.cognizant.orm_relationship.entity.Employee;
import com.cognizant.orm_relationship.entity.Skill;
import com.cognizant.orm_relationship.service.DepartmentService;
import com.cognizant.orm_relationship.service.EmployeeService;
import com.cognizant.orm_relationship.service.SkillService;

@SpringBootApplication
public class OrmRelationshipApplication {

	private static EmployeeService employeeService;
	private static DepartmentService departmentService;
	private static SkillService skillService;
	
	
	public static void main(String[] args) {
		ApplicationContext context = SpringApplication.run(OrmRelationshipApplication.class, args);
	
		employeeService = context.getBean(EmployeeService.class);
		departmentService = context.getBean(DepartmentService.class);
		skillService = context.getBean(SkillService.class);

		testGetEmployee();
		
		testGetDepartment();
		
		testAddSkillToEmployee();
	}
	
	private static void testGetEmployee() {
		System.out.println("Start");
		Employee employee = employeeService.get(1);
		System.out.println(employee);
		
		System.out.println(employee.getDepartment());
	}
	
	private static void testGetDepartment() {		
		Department department = departmentService.get(3);
		
		System.out.println(department);
		System.out.println(department.getEmployeeList());
		
		System.out.println("End");
	}
	
	private static void testAddSkillToEmployee() {

	    Employee employee = employeeService.get(1);

	    Skill skill = skillService.get(2);

	    employee.getSkillList().add(skill);

	    employeeService.save(employee);
	    	
	    System.out.println("Skill Added Successfully");
	}
}

