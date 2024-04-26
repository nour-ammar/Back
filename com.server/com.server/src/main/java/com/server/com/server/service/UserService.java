package com.server.com.server.service;

import com.server.com.server.dao.RoleDao;
import com.server.com.server.dao.UserDao;
import com.server.com.server.entity.Role;
import com.server.com.server.entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.Set;

@Service
public class UserService {

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private UserDao userDao;

    @Autowired
    private RoleDao roleDao;

    public User registerNewUser(User user){
        return userDao.save(user);
    }

    public void initRolesAndUser(){
        Role adminRole = new Role();
        adminRole.setRoleName("Admin");
        adminRole.setRoleDescription("administrator");
        roleDao.save(adminRole);

        Role userRole = new Role();
        userRole.setRoleName("User");
        userRole.setRoleDescription("Default role for newly created record");
        roleDao.save(userRole);

        User adminUser = new User();
        adminUser.setUserFirstName("admin");
        adminUser.setUserLastName("admin");
        adminUser.setUserName("admin123");
        adminUser.setUserPassword(getEncodedPassword("admin@pass"));
        Set<Role> adminRoles = new HashSet<>();
        adminRoles.add(adminRole);
        adminUser.setRole(adminRoles);
        userDao.save(adminUser);



        User user = new User();
        user.setUserFirstName("nour");
        user.setUserLastName("ghada");
        user.setUserName("nour123");
        user.setUserPassword(getEncodedPassword("ghada@pass"));
        Set<Role> userRoles = new HashSet<>();
        user.setRole(userRoles);
        userRoles.add(userRole);
        userDao.save(user);
    }

    public String getEncodedPassword(String password) {
        return passwordEncoder.encode(password);
    }
}
