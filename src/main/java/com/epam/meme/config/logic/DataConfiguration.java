package com.epam.meme.config.logic;

import org.springframework.orm.jpa.JpaVendorAdapter;

import javax.sql.DataSource;

public interface DataConfiguration {
    DataSource dataSource();
    JpaVendorAdapter jpaVendorAdapter();
}
