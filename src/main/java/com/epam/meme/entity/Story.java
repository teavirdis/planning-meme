package com.epam.meme.entity;

import lombok.Data;

import javax.persistence.Entity;
import java.util.List;

@Entity
@Data
public class Story {
    private Long id;
    private String description;
    private List<Vote> votes;
}
