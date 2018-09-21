package com.epam.meme.resource;

import com.epam.meme.converter.VoteConverter;
import com.epam.meme.dto.VoteDto;
import com.epam.meme.entity.Vote;
import com.epam.meme.service.VoteService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;

import javax.validation.Valid;
import javax.ws.rs.*;
import java.util.List;

@Api(value = "/votes", description = "Manage votes")
public class VoteResource {

    @Autowired
    private VoteService voteService;

    @Autowired
    private VoteConverter voteConverter;

    @POST
    @ApiOperation(value = "Save vote")
    public void create(@Valid VoteDto voteDto){
        voteService.create(voteConverter.convertToEntity(voteDto));
    }

    @GET
    @Path("/{voteId}")
    @ApiOperation(value = "Find vote by id")
    public Vote findById(@PathParam("voteId") Long id){
        return voteService.findById(id).orElseThrow(NotFoundException::new);
    }

    @GET
    @ApiOperation(value = "Find votes in range")
    public List<Vote> findAll(
            @QueryParam("startIndex") int startIndex,
            @QueryParam("maxResults") int maxResult){
        //TODO impl
        throw new UnsupportedOperationException();
    }

}
