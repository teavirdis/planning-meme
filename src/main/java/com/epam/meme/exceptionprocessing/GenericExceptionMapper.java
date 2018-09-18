package com.epam.meme.exceptionprocessing;

import lombok.extern.slf4j.Slf4j;

import javax.ws.rs.Produces;
import javax.ws.rs.WebApplicationException;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.ws.rs.ext.ExceptionMapper;
import javax.ws.rs.ext.Provider;

@Slf4j
@Provider
@Produces(MediaType.APPLICATION_JSON)
public class GenericExceptionMapper implements ExceptionMapper<Throwable> {

    @Override
    public Response toResponse(Throwable ex) {
        log.error(ex.getLocalizedMessage(),ex);
        Response.StatusType type = getStatusType(ex);

        ExceptionInfo exceptionInfo = new ExceptionInfo(
                type.getStatusCode(),
                type.getReasonPhrase(),
                ex.getLocalizedMessage());

        return Response.status(exceptionInfo.getStatusCode())
                .entity(exceptionInfo)
                .type(MediaType.APPLICATION_JSON)
                .build();
    }

    private Response.StatusType getStatusType(Throwable ex) {
        if (ex instanceof WebApplicationException) {
            return ((WebApplicationException) ex).getResponse().getStatusInfo();
        } else {
            return Response.Status.INTERNAL_SERVER_ERROR;
        }
    }
}