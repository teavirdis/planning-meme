package com.epam.meme.config.web;

import com.epam.meme.exceptionprocessing.ConstraintViolationExceptionMapper;
import com.epam.meme.exceptionprocessing.GenericExceptionMapper;
import com.epam.meme.filter.CorsResponseFilter;
import io.swagger.jaxrs.config.SwaggerContextService;
import io.swagger.jaxrs.listing.ApiListingResource;
import io.swagger.jaxrs.listing.SwaggerSerializers;
import io.swagger.models.Scheme;
import io.swagger.models.Swagger;
import io.swagger.models.auth.BasicAuthDefinition;
import org.glassfish.jersey.server.ResourceConfig;
import org.springframework.web.context.ServletConfigAware;

import javax.servlet.ServletConfig;
import java.util.Collections;

public class MemeResourceConfiguration extends ResourceConfig implements ServletConfigAware {
    private static final String MEME_RESOURCE = "com.epam.meme.resource";
    private static final String SWAGGER_BASE_PATH = "/meme";

    private ServletConfig servletConfig;

    public MemeResourceConfiguration() {
        packages(MEME_RESOURCE);
        register(ConstraintViolationExceptionMapper.class);
        register(GenericExceptionMapper.class);
        register(CorsResponseFilter.class);
        configureSwagger();
    }

    @Override
    public void setServletConfig(ServletConfig servletConfig) {
        this.servletConfig = servletConfig;
    }

    private void configureSwagger(){
        register(ApiListingResource.class);
        register(SwaggerSerializers.class);
        Swagger swagger = new Swagger();
        swagger.securityDefinition("basicAuth", new BasicAuthDefinition());

        swagger.setSchemes(Collections.singletonList(Scheme.HTTP));
        swagger.setBasePath(SWAGGER_BASE_PATH);
        new SwaggerContextService().withServletConfig(servletConfig).updateSwagger(swagger);
    }
}
