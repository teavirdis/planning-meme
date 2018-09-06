package com.epam.meme.entity;

import lombok.Data;

import javax.persistence.*;

@Entity
@Table(name = "users_votes")
@Data
public class UserVote {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "vote_id")
    private Vote vote;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    private Short estimate;

}


