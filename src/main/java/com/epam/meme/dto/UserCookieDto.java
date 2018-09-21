package com.epam.meme.dto;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class UserCookieDto {
    @JsonProperty("id")
    private Long id;
    @JsonProperty("username")
    private String username;

    @JsonCreator
    public UserCookieDto(@JsonProperty("id") Long id,  @JsonProperty("username") String username) {
        this.id = id;
        this.username = username;
    }

}
