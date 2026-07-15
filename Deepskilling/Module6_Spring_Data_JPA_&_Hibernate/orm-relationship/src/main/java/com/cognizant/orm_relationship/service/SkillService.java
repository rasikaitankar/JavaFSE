package com.cognizant.orm_relationship.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.cognizant.orm_relationship.entity.Skill;
import com.cognizant.orm_relationship.repository.SkillRepository;

@Service
public class SkillService {

	//automatically injects required dependency beans into a class at runtime
	@Autowired
	private SkillRepository skillRepository;
	
	@Transactional
	public Skill get(int id) {
		return skillRepository.findById(id).get();
	}

	@Transactional
	public Skill save(Skill skill) {
		return skillRepository.save(skill);
	}
}
