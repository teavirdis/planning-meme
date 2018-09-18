package com.epam.meme.dto;

import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
public class BoardDto {
    private Long id;
    private String name;
    private LocalDateTime startTime;
    private UserDto admin;
}
