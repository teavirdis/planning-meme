package com.epam.meme.dto;

import com.epam.meme.entity.User;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class VoteDto {

    private User user;
    private Short round;
    private Short estimation;
}
