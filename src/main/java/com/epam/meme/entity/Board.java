package com.epam.meme.entity;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import java.util.List;

@Entity
@Table(name = "boards")
@Data
public class Board {
    private Long id;
    private Long name;

    @ManyToOne
    private User admin;

    @OneToMany
    private List<User> member;
}
