package com.epam.meme.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Table(name = "votes")
public class Vote {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "vote_generator")
    @SequenceGenerator(
            name = "vote_generator",
            sequenceName = "votes_id_seq",
            allocationSize = 1
    )
    private Long id;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    private Short round;
    private Short estimation;
}
