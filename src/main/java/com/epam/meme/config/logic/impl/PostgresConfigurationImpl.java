package com.epam.meme.config.logic.impl;

import com.epam.meme.config.logic.DataConfiguration;
import org.apache.commons.dbcp.BasicDataSource;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;
import org.springframework.context.annotation.PropertySource;
import org.springframework.core.env.Environment;
import org.springframework.orm.jpa.JpaVendorAdapter;
import org.springframework.orm.jpa.vendor.Database;
import org.springframework.orm.jpa.vendor.EclipseLinkJpaVendorAdapter;

import javax.annotation.Resource;
import javax.sql.DataSource;

@Configuration
@PropertySource("classpath:postgres/postgres.properties")
@Profile("dev")
public class PostgresConfigurationImpl implements DataConfiguration {
    private static final String PROP_DATABASE_DRIVER = "db.driver";
    private static final String PROP_DATABASE_PASS = "db.password";
    private static final String PROP_DATABASE_URL = "db.url";
    private static final String PROP_DATABASE_USERNAME = "db.username";
    private static final String PROP_DATABASE_MIN_IDLE = "db.minidle";
    private static final String PROP_DATABASE_MAX_IDLE = "db.maxidle";
    private static final String PROP_POSTGRES_DIALECT = "db.dialect";

    @Resource
    private Environment env;

    @Bean
    public DataSource dataSource() {
        BasicDataSource dataSource = new BasicDataSource();

        dataSource.setDriverClassName(env.getRequiredProperty(PROP_DATABASE_DRIVER));
        dataSource.setUrl(env.getRequiredProperty(PROP_DATABASE_URL));
        dataSource.setUsername(env.getRequiredProperty(PROP_DATABASE_USERNAME));
        dataSource.setPassword(env.getRequiredProperty(PROP_DATABASE_PASS));
        dataSource.setMinIdle(Integer.valueOf(env.getRequiredProperty(PROP_DATABASE_MIN_IDLE)));
        dataSource.setMaxIdle(Integer.valueOf(env.getRequiredProperty(PROP_DATABASE_MAX_IDLE)));
        return dataSource;
    }

    @Bean
    public JpaVendorAdapter jpaVendorAdapter() {
        EclipseLinkJpaVendorAdapter vendorAdapter = new EclipseLinkJpaVendorAdapter();
        vendorAdapter.setDatabase(Database.POSTGRESQL);
        vendorAdapter.setDatabasePlatform(env.getRequiredProperty(PROP_POSTGRES_DIALECT));
        return vendorAdapter;
    }

}
