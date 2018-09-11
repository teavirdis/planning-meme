package com.epam.meme.exceptionprocessing;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ValidationInfo {

    private String[] messages;
    private int status;
}
