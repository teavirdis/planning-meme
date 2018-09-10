package com.epam.meme.dto;

import lombok.Data;

import java.time.LocalDateTime;
import java.util.List;

@Data
public class StoryDto {

    private String description;

    private List<VoteDto> votes;

    private BoardDto board;

    private LocalDateTime startTime;
    private LocalDateTime finishTime;

    private Short estimation;
}
