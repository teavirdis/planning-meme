package com.epam.meme.entity;

import lombok.Data;

import javax.persistence.*;

@Entity
@Table(name = "estimate_stories")
@Data
public class EstimateStory {
    @OneToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "story_id")
    private Story story;
    private Estimate estimate;
}
