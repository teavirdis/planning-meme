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
    private String name;

    @Column(name = "start_time")
    @Convert(converter = LocalDateTimeConverter.class)
    private LocalDateTime startTime;

    @ManyToOne
    @JoinColumn(name = "admin_id")
    private User admin;

    @ManyToMany(cascade = CascadeType.MERGE, fetch = FetchType.EAGER)
    @JoinTable(name = "boards_users",
            joinColumns = {@JoinColumn(name = "board_id")},
            inverseJoinColumns = {@JoinColumn(name = "user_id")})
    private List<User> users;
}
