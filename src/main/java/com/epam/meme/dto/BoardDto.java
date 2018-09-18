package com.epam.meme.dto;

import com.epam.meme.entity.User;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
public class BoardDto {
    private String id;
    private String name;
    private LocalDateTime startTime;
    private UserDto admin;
}
