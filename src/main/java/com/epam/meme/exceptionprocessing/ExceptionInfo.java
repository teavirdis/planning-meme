package com.epam.meme.exceptionprocessing;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class ExceptionInfo {

    private int statusCode;
    private String statusDescription;
    private String errorMessage;
}
