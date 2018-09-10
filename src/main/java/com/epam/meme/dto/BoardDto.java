package com.epam.meme.dto;

import com.epam.meme.entity.User;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class BoardDto {

    private String name;
    private User admin;
}
