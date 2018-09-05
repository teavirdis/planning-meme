package com.epam.meme.entity;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import java.util.List;

@Entity
@Table(name = "stories")
@Data
public class Story {
    private Long id;
    private String description;

    @OneToMany
    private List<Vote> votes;
}
