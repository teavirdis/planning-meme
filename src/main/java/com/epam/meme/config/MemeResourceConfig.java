package com.epam.meme.config;

import org.glassfish.jersey.server.ResourceConfig;

public class MemeResourceConfig extends ResourceConfig {

    private static final String MEME_RESOURCE = "com.epam.meme.resource";

    public MemeResourceConfig() {
        packages(MEME_RESOURCE);
    }
}
