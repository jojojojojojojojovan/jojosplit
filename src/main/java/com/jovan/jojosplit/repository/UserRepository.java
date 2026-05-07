package com.jovan.jojosplit.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.jovan.jojosplit.entity.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
}