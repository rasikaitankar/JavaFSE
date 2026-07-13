package com.example.usermanagementsystem;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertEquals;

@ExtendWith(MockitoExtension.class)
public class UserServiceUnitTest {

    @InjectMocks
    private UserService userService;

    @Mock
    private UserRepository userRepository;

    @Test
    public void testFindById(){
        User mockUser = new User(1L,"John Doe");

        Mockito.when(userRepository.findById(1L)).thenReturn(Optional.of(mockUser));

        User user = userService.findById(1L);

        assertEquals("John Doe",user.getName());
    }
}
