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
    private Long name;

    @ManyToOne
    @JoinColumn(name = "admin_id")
    private User admin;

    @OneToMany(cascade = CascadeType.MERGE, mappedBy = "board", fetch = FetchType.EAGER)
    private List<User> members;
}
