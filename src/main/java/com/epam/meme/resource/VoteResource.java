package com.epam.meme.resource;

import com.epam.meme.dto.VoteDto;
import com.epam.meme.entity.Vote;
import com.epam.meme.service.VoteService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;

import javax.validation.Valid;
import javax.ws.rs.*;
import java.util.List;

public class VoteResource {

    @Autowired
    private VoteService voteService;

    @Autowired
    private ModelMapper modelMapper;

    @POST
    public void create(@Valid VoteDto voteDto){
        voteService.create(convertToEntity(voteDto));
    }

    @GET
    @Path("/{voteId}")
    public Vote findById(@PathParam("voteId") Long id){
        return voteService.findById(id).get();
    }

    @GET
    public List<Vote> findAll(
            @QueryParam("startIndex") int startIndex,
            @QueryParam("maxResults") int maxResult){
        //TODO impl
        throw new UnsupportedOperationException();
    }

    private Vote convertToEntity(VoteDto voteDto) {
        return modelMapper.map(voteDto, Vote.class);
    }
}
