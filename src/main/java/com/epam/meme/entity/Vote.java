package com.epam.meme.entity;

import lombok.Data;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.List;

@Entity
@Table(name = "votes")
@Data
public class Vote {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private LocalDateTime startDateTime;
    private LocalDateTime finishDateTime;

    @OneToMany(cascade = CascadeType.MERGE, mappedBy = "vote", fetch = FetchType.EAGER)
    private List<User> votedUsers;
}
