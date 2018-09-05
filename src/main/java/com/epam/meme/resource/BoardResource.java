package com.epam.meme.resource;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;

@Path("/rooms")
@Produces({MediaType.APPLICATION_JSON})
public class BoardResource {

    @GET
    @Path("/{id}")
    public int defineChat(@PathParam("id") int roomId) {
        return roomId;
    }
}
