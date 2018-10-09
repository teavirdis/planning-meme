package com.epam.meme.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class StoryUpdateDto {

    private String description;
    private boolean setStartTime;
    private boolean setFinishTime;
    private Short estimation;
}
