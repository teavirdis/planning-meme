package com.epam.meme.dto;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;

public class UserDto {

    @NotNull
    @Pattern(regexp = "^(?=.{3,20}$)(?![_])(?!.*[_]{2,})[a-zA-Z0-9_]+(?<![_])$",
             message = "{pattern.user.username}")
    public String username;
}
