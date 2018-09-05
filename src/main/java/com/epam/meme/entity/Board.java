package com.epam.meme.entity;

import lombok.Data;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "boards")
@Data
public class Board {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String name;

    @ManyToOne
    @JoinColumn(name = "admin_id")
    private User admin;

    //TODO Andrei, ahtung! Fix it: add many to many

    @OneToMany(cascade = CascadeType.MERGE, mappedBy = "board", fetch = FetchType.EAGER)
    private List<User> members;
}
