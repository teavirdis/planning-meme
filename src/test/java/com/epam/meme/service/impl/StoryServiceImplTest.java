package com.epam.meme.service.impl;

import com.epam.meme.config.logic.ApplicationConfiguration;
import com.epam.meme.entity.Board;
import com.epam.meme.entity.Story;
import com.epam.meme.entity.User;
import com.epam.meme.service.StoryService;
import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;

@RunWith(SpringJUnit4ClassRunner.class)
@ActiveProfiles("test")
@ContextConfiguration(classes = {ApplicationConfiguration.class})
@Transactional
public class StoryServiceImplTest {

    @Autowired
    private StoryService service;

    @Test
    public void findById_found() {
        Assert.assertTrue(service.findById(1L).isPresent());
    }

    @Test
    public void findById_notFound() {
        Assert.assertFalse(service.findById(Long.MAX_VALUE).isPresent());
    }

    @Test
    public void create_created() {
        Story story = Story.builder().id(10L)
                .startTime(LocalDateTime.now())
                .finishTime(LocalDateTime.now())
                .description("Cool story, bro")
                .estimation((short) 5)
                .board(Board.builder().id(10L).name("name")
                        .admin(
                                User.builder().id(10L).email("email").username("username").password("password").build()
                        ).build())
                .build();

        service.create(story);
    }

    @Test
    public void update_updated() {
        Story story = service.findById(1L).orElseThrow(RuntimeException::new);
        story.setDescription("newdescription");
        service.update(story);
        Assert.assertEquals("newdescription", service.findById(1L)
                .orElseThrow(RuntimeException::new).getDescription());
    }

    @Test(expected = Exception.class) //TODO specify correct exception
    public void update_notUpdated() {
        Story story = new Story();
        service.update(story);
    }
}
