package com.epam.meme.resource;

import com.epam.meme.dto.StoryDto;
import com.epam.meme.entity.Board;
import com.epam.meme.entity.Story;
import com.epam.meme.service.BoardService;
import com.epam.meme.service.StoryService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;

import javax.validation.Valid;
import javax.ws.rs.*;
import java.util.List;
import java.util.stream.Collectors;

@Api(value = "/stories", description = "Manage stories")
public class StoryResource {

    @Autowired
    private StoryService storyService;

    @Autowired
    private BoardService boardService;

    @Autowired
    private ModelMapper modelMapper;

    @POST
    @ApiOperation(value = "Save story")
    public void create(@PathParam("boardId") Long boardId, @Valid StoryDto storyDto) {
        Story story = convertToEntity(storyDto);
        story.setBoard(boardService.findById(boardId).orElseThrow(NotFoundException::new));
        storyService.create(story);
    }

    @GET
    @ApiOperation(value = "Find stories in range")
    public List<StoryDto> findAll(@PathParam("boardId") Long boardId, @QueryParam("page")     int page,
                               @QueryParam("pageSize") int pageSize){
        Pageable pageable = PageRequest.of(page, pageSize);
        return storyService.findAllByBoardId(boardId, pageable).getContent().stream().map(this::convertToDto).collect(Collectors.toList());
    }

    @GET
    @ApiOperation(value = "Find story by id")
    @Path("/{storyId}")
    public Story findById(@PathParam("storyId") Long storyId) {
        return storyService.findById(storyId).orElseThrow(NotFoundException::new);
    }

    @PUT
    @ApiOperation(value = "Update story by id")
    @Path("/{storyId}")
    public void update(@PathParam("storyId") Long storyId, StoryDto storyDto) {
        Story story = storyService.findById(storyId).orElseThrow(NotFoundException::new);

        if (storyDto.getDescription() != null) {
            story.setDescription(storyDto.getDescription());
        }
        if (storyDto.getEstimation() != null) {
            story.setEstimation(storyDto.getEstimation());
        }
        if (storyDto.getFinishTime() != null) {
            story.setFinishTime(storyDto.getFinishTime());
        }

        storyService.update(story);
    }

    @DELETE
    @ApiOperation(value = "Delete story by id")
    @Path("/{storyId}")
    public void delete(@PathParam("storyId") Long storyId) {
        storyService.deleteById(storyId);
    }

    @Path("/{storyId}/votes")
    public Class<VoteResource> voteResource(){
        return VoteResource.class;
    }

    private Story convertToEntity(StoryDto storyDto) {
        return modelMapper.map(storyDto, Story.class);
    }

    private StoryDto convertToDto(Story story){
        return modelMapper.map(story, StoryDto.class);
    }
}
