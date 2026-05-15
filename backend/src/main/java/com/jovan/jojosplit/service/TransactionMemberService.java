package com.jovan.jojosplit.service;

import java.math.BigDecimal;
import java.util.List;

import org.springframework.stereotype.Service;

import com.jovan.jojosplit.entity.GroupMember;
import com.jovan.jojosplit.entity.Transaction;
import com.jovan.jojosplit.entity.TransactionMember;
import com.jovan.jojosplit.repository.TransactionMemberRepository;

@Service
public class TransactionMemberService {

    private final TransactionMemberRepository transactionMemberRepository;
    private final TransactionService transactionService;
    private final GroupMemberService groupMemberService;

    public TransactionMemberService(TransactionMemberRepository transactionMemberRepository,
                                    TransactionService transactionService,
                                    GroupMemberService groupMemberService) {
        this.transactionMemberRepository = transactionMemberRepository;
        this.transactionService = transactionService;
        this.groupMemberService = groupMemberService;
    }

    public List<TransactionMember> getAllTransactionMembers() {
        return transactionMemberRepository.findAll();
    }

    public TransactionMember getTransactionMemberById(Long id) {
        return transactionMemberRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("TransactionMember not found with id: " + id));
    }

    public TransactionMember addTransactionMember(Long transactionId, Long memberId,
                                                   BigDecimal amount) {
        Transaction transaction = transactionService.getTransactionById(transactionId);
        GroupMember member = groupMemberService.getGroupMemberById(memberId);

        TransactionMember transactionMember = new TransactionMember();
        transactionMember.setTransaction(transaction);
        transactionMember.setMember(member);
        transactionMember.setAmount(amount);

        return transactionMemberRepository.save(transactionMember);
    }

    public void deleteTransactionMember(Long id) {
        transactionMemberRepository.deleteById(id);
    }
}