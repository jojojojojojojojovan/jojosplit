package com.jovan.jojosplit.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.jovan.jojosplit.entity.User;
import com.jovan.jojosplit.service.GroupMemberService;
import com.jovan.jojosplit.service.GroupService;
import com.jovan.jojosplit.service.UserService;
import com.jovan.jojosplit.entity.Group;

import java.util.List;

@RestController
@RequestMapping("/api/groups")
public class GroupController {
    
    private final GroupService groupService;
    private final GroupMemberService groupMemberService;
    private final UserService userService;

    public GroupController(GroupService groupService, UserService userService, GroupMemberService groupMemberService) {
        this.groupService = groupService;
        this.userService = userService;
        this.groupMemberService = groupMemberService;
    }
    
    @GetMapping("/{userId}")
    public ResponseEntity<List<Group>> getGroupByUserId(@PathVariable Long userId) {
        return ResponseEntity.ok(groupMemberService.getGroupsByUserId(userId));
    }

    @PostMapping
    public ResponseEntity<User> createUser(@RequestBody User user) {
        return ResponseEntity.ok(userService.createUser(user));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteUser(@PathVariable Long id) {
        userService.deleteUser(id);
        return ResponseEntity.noContent().build();
    }
}