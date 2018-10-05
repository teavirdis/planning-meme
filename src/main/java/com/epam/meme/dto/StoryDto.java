package com.epam.meme.dto;

import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.time.LocalDateTime;

@Getter
@Setter
public class StoryDto {
    private String id;

    @NotNull(message = "{story.description.notnull}")
    @Size(min = 1, max = 50, message = "{story.description.size}")
    private String description;
    private LocalDateTime startTime;
    private LocalDateTime finishTime;
    private Short estimation;
}
