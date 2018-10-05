package com.epam.meme.entity;

import lombok.*;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Data
@EqualsAndHashCode(exclude = {"stories", "users"})
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Table(name = "boards")
public class Board {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "board_generator")
    @SequenceGenerator(
            name = "board_generator",
            sequenceName = "boards_id_seq",
            allocationSize = 1
    )
    private Long id;

    @NotNull(message = "{board.name.notnull}")
    @Size(min = 1, max = 50, message = "{board.name.size}")
    private String name;

    @Column(name = "start_time")
    @Convert(converter = LocalDateTimeConverter.class)
    private LocalDateTime startTime;

    @ManyToOne
    @JoinColumn(name = "admin_id")
    private User admin;

    @ManyToMany(cascade = CascadeType.MERGE, fetch = FetchType.EAGER)
    @JoinTable(
            name = "boards_users",
            joinColumns = {@JoinColumn(name = "board_id")},
            inverseJoinColumns = {@JoinColumn(name = "user_id")}
    )
    private List<User> users = new ArrayList<>();

    @OneToMany(
            mappedBy = "board",
            cascade = CascadeType.REMOVE,
            orphanRemoval = true
    )
    private List<Story> stories = new ArrayList<>();
}
