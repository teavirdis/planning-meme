package com.epam.meme.entity;

import lombok.Data;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.List;

@Entity
@Table(name = "stories")
@Data
public class Story {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String description;

    @OneToMany
    @JoinColumn(name = "story_id")
    private List<Vote> votes;

    @ManyToOne
    @JoinColumn(name = "board_id")
    private Board board;

    private LocalDateTime startTime;
    private LocalDateTime finishTime;
    private Short estimation;
}
