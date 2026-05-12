package com.jovan.jojosplit.repository;

import com.jovan.jojosplit.entity.TransactionMember;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TransactionMemberRepository extends JpaRepository<TransactionMember, Long> {
}