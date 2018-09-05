package com.epam.meme.config.web;

import org.glassfish.jersey.server.ResourceConfig;

public class MemeResourceConfiguration extends ResourceConfig {
    private static final String MEME_RESOURCE = "com.epam.meme.resource";

    public MemeResourceConfiguration() {
        packages(MEME_RESOURCE);
    }
}
