package com.epam.meme.entity;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "estimate_stories")
@Data
public class EstimateStory {
    @OneToOne
    private Story story;
    private Estimate estimate;
}
