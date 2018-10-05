package com.epam.meme.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.json.bind.annotation.JsonbTransient;
import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
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

    @NotNull(message = "{story.description.notnull}")
    @Size(min = 1, max = 50, message = "{story.description.size}")
    private String description;

    @OneToMany
    @JoinColumn(name = "story_id")
    private List<Vote> votes;

    @JsonbTransient
    private Board board;

    @Column(name = "start_time")
    @Convert(converter = LocalDateTimeConverter.class)
    private LocalDateTime startTime;

    @Column(name = "finish_time")
    @Convert(converter = LocalDateTimeConverter.class)
    private LocalDateTime finishTime;

    private Short estimation;
}
