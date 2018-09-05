package com.epam.meme.entity;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.ManyToOne;
import java.util.List;

@Entity
@Data
public class Board {
    private Long id;
    private Long name;

    @ManyToOne
    private User admin;

    private List<User> member;
}
