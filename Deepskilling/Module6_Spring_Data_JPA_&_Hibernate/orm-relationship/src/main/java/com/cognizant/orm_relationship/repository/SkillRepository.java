package com.cognizant.orm_relationship.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cognizant.orm_relationship.entity.Skill;

@Repository
public interface SkillRepository extends JpaRepository<Skill, Integer> {

}