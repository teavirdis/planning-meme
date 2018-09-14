package com.epam.meme.cucumber.step;

import com.epam.meme.config.logic.ApplicationConfiguration;
import com.epam.meme.service.UserService;
import cucumber.api.java8.En;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.transaction.annotation.Transactional;

import javax.ws.rs.NotFoundException;

import static com.codeborne.selenide.Selectors.byId;
import static com.codeborne.selenide.Selectors.byName;
import static com.codeborne.selenide.Selenide.*;
import static org.junit.Assert.assertEquals;

@ActiveProfiles("test")
@ContextConfiguration(classes = {ApplicationConfiguration.class})
@Transactional
public class StepDefinition implements En {
    @Autowired
    private UserService service;

    private static final long SLEEP_TIME = 1500;

    public StepDefinition() {
        Given("^open chrome and run planning meme application$", () -> open("http://localhost:8081/"));

        When("^click twice to button with id \"([^\"]*)\"$", (String id) -> {
            sleep(SLEEP_TIME);
            $(byId(id)).click();
            sleep(SLEEP_TIME);
            $(byId(id)).click();
        });
        And("^type to input with name \"([^\"]*)\" text: \"([^\"]*)\"$", (String name, String value) -> {
            sleep(SLEEP_TIME);
            $(byName(name)).sendKeys(value);
        });
        And("^press button with name \"([^\"]*)\"$", (String name) -> {
            sleep(SLEEP_TIME);
            $(byName(name)).click();
        });

        Then("^verify that user with username \"([^\"]*)\" was created$", (String username) -> {
            sleep(SLEEP_TIME);
            assertEquals(username, (service.findByUsername(username).orElseThrow(NotFoundException::new).getUsername()));
        });
    }
}
