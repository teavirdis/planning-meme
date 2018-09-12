package com.epam.meme.config.web;

import com.epam.meme.exceptionprocessing.ConstraintViolationExceptionMapper;
import com.epam.meme.exceptionprocessing.GenericExceptionMapper;
import com.epam.meme.filter.CorsResponseFilter;
import io.swagger.jaxrs.listing.ApiListingResource;
import io.swagger.jaxrs.listing.SwaggerSerializers;
import org.glassfish.jersey.server.ResourceConfig;

public class MemeResourceConfiguration extends ResourceConfig {
    private static final String MEME_RESOURCE = "com.epam.meme.resource";

    public MemeResourceConfiguration() {
        packages(MEME_RESOURCE);
        register(ConstraintViolationExceptionMapper.class);
        register(GenericExceptionMapper.class);
        register(CorsResponseFilter.class);
        register(ApiListingResource.class);
        register(SwaggerSerializers.class);
    }
}
