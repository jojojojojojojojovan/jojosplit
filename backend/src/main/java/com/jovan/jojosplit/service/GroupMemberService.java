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

    public Group createGroupWithMembers(String name, List<String> memberNames) {
        Group group = new Group();
        group.setName(name);
        Group savedGroup = groupService.createGroup(group);

        if (memberNames != null) {
            for (String memberName : memberNames) {
                if (memberName == null) {
                    continue;
                }

                String trimmedName = memberName.trim();
                if (trimmedName.isEmpty()) {
                    continue;
                }

                User user = new User();
                user.setName(trimmedName);
                user.setEmail(null);
                User savedUser = userService.createUser(user);

                GroupMember groupMember = new GroupMember();
                groupMember.setGroup(savedGroup);
                groupMember.setUser(savedUser);
                groupMemberRepository.save(groupMember);
            }
        }

        return savedGroup;
    }

    public void removeMemberFromGroup(Long id) {
        groupMemberRepository.deleteById(id);
    }
}