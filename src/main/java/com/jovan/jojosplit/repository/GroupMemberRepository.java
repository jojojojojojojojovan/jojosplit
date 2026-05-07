package com.jovan.jojosplit.repository;

import com.jovan.jojosplit.entity.GroupMember;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface GroupMemberRepository extends JpaRepository<GroupMember, Long> {
}