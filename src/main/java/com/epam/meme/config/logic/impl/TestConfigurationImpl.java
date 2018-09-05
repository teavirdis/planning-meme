package com.epam.meme.config.logic.impl;

import com.epam.meme.config.logic.DataConfiguration;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;
import org.springframework.context.annotation.PropertySource;
import org.springframework.jdbc.datasource.embedded.EmbeddedDatabaseBuilder;
import org.springframework.jdbc.datasource.embedded.EmbeddedDatabaseType;
import org.springframework.orm.jpa.JpaVendorAdapter;
import org.springframework.orm.jpa.vendor.Database;
import org.springframework.orm.jpa.vendor.EclipseLinkJpaVendorAdapter;

import javax.sql.DataSource;

@Configuration
@PropertySource("classpath:h2/h2.properties")
@Profile("test")
public class TestConfigurationImpl implements DataConfiguration {
    private static final String H2_PLATFORM = "h2.platform";
    private static final String H2_CREATE_SQL = "h2/schema.sql";
    private static final String H2_INIT_SQL = "h2/init.sql";

    @Bean
    public DataSource dataSource() {

        return new EmbeddedDatabaseBuilder()
                .setType(EmbeddedDatabaseType.H2)
                .addScript(H2_CREATE_SQL)
                .addScript(H2_INIT_SQL)
                .build();
    }

    @Bean
    public JpaVendorAdapter jpaVendorAdapter() {
        EclipseLinkJpaVendorAdapter vendorAdapter = new EclipseLinkJpaVendorAdapter();
        vendorAdapter.setDatabase(Database.H2);
        vendorAdapter.setDatabasePlatform(H2_PLATFORM);
        return vendorAdapter;
    }

}
