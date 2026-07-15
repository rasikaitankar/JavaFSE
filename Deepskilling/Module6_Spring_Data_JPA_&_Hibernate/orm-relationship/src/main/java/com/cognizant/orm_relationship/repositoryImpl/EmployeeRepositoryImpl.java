package com.cognizant.orm_relationship.repositoryImpl;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.cognizant.orm_relationship.entity.Employee;
import com.cognizant.orm_relationship.repository.EmployeeRepositoryCustom;

import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.persistence.criteria.CriteriaBuilder;
import jakarta.persistence.criteria.CriteriaQuery;
import jakarta.persistence.criteria.Root;

@Repository
public class EmployeeRepositoryImpl implements EmployeeRepositoryCustom{
	
	@PersistenceContext
	private EntityManager entityManager;
	
	@Override
	public List<Employee> searchEmployee(Boolean permanent){
		
		CriteriaBuilder cb = entityManager.getCriteriaBuilder();
		
		CriteriaQuery<Employee> cq = cb.createQuery(Employee.class);
		
		Root<Employee> employee = cq.from(Employee.class);
		
		if(permanent != null) {
			cq.where(cb.equal(employee.get("permanent"),permanent));
			}
		return entityManager.createQuery(cq).getResultList();
		}
	
}
