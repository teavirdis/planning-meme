package com.epam.meme.entity;

import lombok.*;

import javax.json.bind.annotation.JsonbTransient;
import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;
import java.time.LocalDateTime;
import java.util.List;

@Entity
@Data
@EqualsAndHashCode(exclude = {"boards"})
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

    @NotNull(message = "{user.username.notnull}")
    @Pattern(
            regexp = "^(?=.{3,20}$)(?![_])(?!.*[_]{2,})[a-zA-Z0-9_]+(?<![_])$",
            message = "{user.username.pattern}"
    )
    @Column(nullable = false, length = 20)
    private String username;
    private String email;
    private String password;

    @JsonbTransient
    @Column(name = "last_activity_time")
    @Convert(converter = LocalDateTimeConverter.class)
    private LocalDateTime lastActivityTime;

    @JsonbTransient
    @ManyToMany(mappedBy = "users", cascade = CascadeType.REMOVE)
    private List<Board> boards;
}
