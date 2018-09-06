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

    @ManyToMany(cascade = CascadeType.MERGE, fetch = FetchType.EAGER)
    @JoinTable(name = "users_votes",
            joinColumns = {@JoinColumn(name = "vote_id")},
            inverseJoinColumns = {@JoinColumn(name = "user_id")})
    private List<User> votedUsers;

    @OneToMany(mappedBy = "vote", orphanRemoval = true)
    private List<UserVote> userVotes;
}
