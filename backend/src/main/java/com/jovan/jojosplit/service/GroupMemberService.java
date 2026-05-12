package com.jovan.jojosplit.service;

import com.jovan.jojosplit.entity.Group;
import com.jovan.jojosplit.entity.GroupMember;
import com.jovan.jojosplit.entity.User;
import com.jovan.jojosplit.repository.GroupMemberRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class GroupMemberService {

    private final GroupMemberRepository groupMemberRepository;
    private final GroupService groupService;
    private final UserService userService;

    public GroupMemberService(GroupMemberRepository groupMemberRepository,
                              GroupService groupService,
                              UserService userService) {
        this.groupMemberRepository = groupMemberRepository;
        this.groupService = groupService;
        this.userService = userService;
    }

    public List<GroupMember> getAllGroupMembers() {
        return groupMemberRepository.findAll();
    }

    public GroupMember getGroupMemberById(Long id) {
        return groupMemberRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("GroupMember not found with id: " + id));
    }

    public List<Group> getGroupsByUserId(Long userId) {
    return groupMemberRepository.findByUserId(userId)
            .stream()
            .map(GroupMember::getGroup)
            .toList();
    }

    public GroupMember addMemberToGroup(Long groupId, Long userId) {
        Group group = groupService.getGroupById(groupId);
        User user = userService.getUserById(userId);

        GroupMember groupMember = new GroupMember();
        groupMember.setGroup(group);
        groupMember.setUser(user);

        return groupMemberRepository.save(groupMember);
    }

    public void removeMemberFromGroup(Long id) {
        groupMemberRepository.deleteById(id);
    }
}