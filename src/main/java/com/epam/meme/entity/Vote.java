package com.epam.meme.entity;

import lombok.Data;

import javax.persistence.Entity;
import java.time.LocalDateTime;
import java.util.List;

@Entity
@Data
public class Vote {
    private Long id;
    private LocalDateTime startDateTime;
    private LocalDateTime finishDateTime;
    private List<User> votedUsers;
}
