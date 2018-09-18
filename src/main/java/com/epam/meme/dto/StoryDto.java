package com.epam.meme.dto;

import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
public class StoryDto {
    private String id;
    private String description;
    private LocalDateTime startTime;
    private LocalDateTime finishTime;
    private Short estimation;
}
