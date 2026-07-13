package com.example.usermanagementsystem;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
@Entity
@Table(name="user")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String name;
    public User(Long o, String janeDoe){

    }
    public User(long id,String name){
        this.id = id;
        this.name = name;
    }
}
