package com.epam.meme.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "user_generator")
    @SequenceGenerator(
            name = "user_generator",
            sequenceName = "users_id_seq",
            allocationSize = 1
    )
    private Long id;
    private String username;
    private String email;
    private String password;

    @ManyToMany(mappedBy = "users")
    private List<Board> boards;
}
