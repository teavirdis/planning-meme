package com.epam.meme.exceptionprocessing;

import lombok.extern.slf4j.Slf4j;

import javax.validation.ConstraintViolation;
import javax.validation.ConstraintViolationException;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.ws.rs.ext.ExceptionMapper;
import javax.ws.rs.ext.Provider;
import java.util.ArrayList;
import java.util.List;

@Slf4j
@Provider
@Produces(MediaType.APPLICATION_JSON)
public class ConstraintViolationExceptionMapper
        implements ExceptionMapper<ConstraintViolationException> {

    @Override
    public Response toResponse(ConstraintViolationException exception) {
        log.error(exception.getLocalizedMessage(),exception);

        List<String> messages = new ArrayList<>();
        for (ConstraintViolation<?> violation : exception.getConstraintViolations()) {
            messages.add(violation.getMessage());
        }
        ValidationInfo validationInfo = new ValidationInfo();
        validationInfo.setMessages(messages.toArray(new String[] {}));
        validationInfo.setStatus(5);

        return Response.status(400)
                .entity(validationInfo)
                .type(MediaType.APPLICATION_JSON)
                .build();
    }
}
