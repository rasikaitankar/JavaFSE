package com.example.usermanagementsystem;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {

    private final UserRepository userRepository;

    @Autowired
    public UserService(UserRepository userRepository){
        this.userRepository = userRepository;
    }

    public User findById(Long id){
        Optional<User> user = userRepository.findById(id);
        return user.orElse(null);
    }

    public User saveUser(User user){
        return userRepository.save(user);
    }

}
