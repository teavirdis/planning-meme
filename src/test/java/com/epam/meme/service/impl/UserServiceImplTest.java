package com.epam.meme.service.impl;

import com.epam.meme.config.logic.ApplicationConfiguration;
import com.epam.meme.entity.User;
import com.epam.meme.service.UserService;
import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.transaction.annotation.Transactional;

@RunWith(SpringJUnit4ClassRunner.class)
@ActiveProfiles("test")
@ContextConfiguration(classes = {ApplicationConfiguration.class})
@Transactional
public class UserServiceImplTest {

    @Autowired
    private UserService service;

    @Test
    public void findById_found() {
        Assert.assertTrue(service.findById(1L).isPresent());
    }

    @Test
    public void findById_notFound() {
        Assert.assertFalse(service.findById(Long.MAX_VALUE).isPresent());
    }

    @Test
    public void findByEmail_found() {
        Assert.assertTrue(service.findByEmail("user1@gmail.com").isPresent());
    }

    @Test
    public void findByEmail_notFound() {
        Assert.assertFalse(service.findByEmail("").isPresent());
    }

    @Test
    public void findByUsername_found() {
        Assert.assertTrue(service.findByUsername("user1").isPresent());
    }

    public void findByUsername_notFound() {
        Assert.assertFalse(service.findByUsername("").isPresent());
    }

    @Test
    public void create_created() {
        User user = new User();
        user.setEmail("email");
        user.setUsername("username");
        user.setPassword("password");
        service.create(user);
    }

    @Test(expected = Exception.class) //TODO specify correct exception
    public void create_notCreated() {
        User user = new User();
        service.create(user);
    }

    @Test
    public void update_updated() {
        User user = service.findById(1L).get();
        user.setUsername("newusername");
        service.update(user);
        Assert.assertEquals(service.findById(1L).get().getUsername(), "newusername");
    }

    @Test(expected = Exception.class) //TODO specify correct exception
    public void update_notUpdated() {
        User user = new User();
        service.update(user);
    }

    @Test
    public void  delete_deleted() {
        User user = service.findById(1L).get();
        service.delete(user);
    }

    @Test(expected = Exception.class) //TODO specify correct exception
    public void delete_notDeleted() {
        User user = new User();
        service.delete(user);
    }

}
