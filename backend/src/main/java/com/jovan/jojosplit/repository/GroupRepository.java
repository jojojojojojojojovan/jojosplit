package com.jovan.jojosplit.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.jovan.jojosplit.entity.Group;

@Repository
public interface GroupRepository extends JpaRepository<Group, Long> {
  
}
