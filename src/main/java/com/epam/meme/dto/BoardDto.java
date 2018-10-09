package com.epam.meme.dto;

import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.time.LocalDateTime;

@Getter
@Setter
public class BoardDto {
    private Long id;

    @NotNull(message = "{board.name.notnull}")
    @Size(min = 1, max = 50, message = "{board.name.size}")
    private String name;
    private LocalDateTime startTime;
    private UserDto admin;
    private int countOfStories;
}
