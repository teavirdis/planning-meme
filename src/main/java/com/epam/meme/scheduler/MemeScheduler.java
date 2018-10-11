package com.epam.meme.scheduler;

import com.epam.meme.entity.User;
import com.epam.meme.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

@Component
public class MemeScheduler {

    @Autowired
    private UserService userService;

    @Scheduled(cron="*/10 * * * * *")
    public void trackDullUsers(){
        System.out.println("Schedule is running...");
        for (User user: userService.findAll()){
            System.out.println(user);
        }
    }
}
