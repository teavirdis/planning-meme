package com.epam.meme.dto;

import com.epam.meme.entity.User;
import lombok.Data;

import java.util.List;

@Data
public class BoardDto {
    private String name;

    private UserDto admin;

    private List<UserDto> users;
}
