package com.epam.meme.dto;

import lombok.Data;

@Data
public class VoteDto {

    private UserDto user;
    private Short round;
    private Short estimation;
}
