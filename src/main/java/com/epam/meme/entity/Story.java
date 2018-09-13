package com.epam.meme.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.List;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Table(name = "stories")
public class Story {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "story_generator")
    @SequenceGenerator(
            name = "story_generator",
            sequenceName = "stories_id_seq",
            allocationSize = 1
    )
    private Long id;
    private String description;

    @OneToMany
    @JoinColumn(name = "story_id")
    private List<Vote> votes;

    @ManyToOne
    @JoinColumn(name = "board_id")
    private Board board;

    @Column(name = "start_time")
    private LocalDateTime startTime;

    @Column(name = "finish_time")
    private LocalDateTime finishTime;
    private Short estimation;
}
