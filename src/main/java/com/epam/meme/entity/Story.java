package com.epam.meme.entity;

import lombok.Data;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "stories")
@Data
public class Story {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String description;

    @OneToMany(cascade = CascadeType.MERGE, mappedBy = "story", fetch = FetchType.EAGER)
    private List<Vote> votes;
}
