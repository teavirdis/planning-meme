package com.epam.meme.entity;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name = "users")
@Data
public class User {
    private Long id;
    private String username;
    private String email;
    private String password;
}
