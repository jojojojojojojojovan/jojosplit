package com.jovan.jojosplit.service;

import com.jovan.jojosplit.entity.Group;
import com.jovan.jojosplit.entity.Transaction;
import com.jovan.jojosplit.entity.User;
import com.jovan.jojosplit.repository.TransactionRepository;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
public class TransactionService {

    private final TransactionRepository transactionRepository;
    private final GroupService groupService;
    private final UserService userService;

    public TransactionService(TransactionRepository transactionRepository,
                              GroupService groupService,
                              UserService userService) {
        this.transactionRepository = transactionRepository;
        this.groupService = groupService;
        this.userService = userService;
    }

    public List<Transaction> getAllTransactions() {
        return transactionRepository.findAll();
    }

    public Transaction getTransactionById(Long id) {
        return transactionRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Transaction not found with id: " + id));
    }

    public Transaction createTransaction(Long groupId, Long createdById, String name, LocalDate date) {
        Group group = groupService.getGroupById(groupId);
        User createdBy = userService.getUserById(createdById);

        Transaction transaction = new Transaction();
        transaction.setGroup(group);
        transaction.setCreatedBy(createdBy);
        transaction.setName(name);
        transaction.setDate(date);

        return transactionRepository.save(transaction);
    }

    public void deleteTransaction(Long id) {
        transactionRepository.deleteById(id);
    }
}