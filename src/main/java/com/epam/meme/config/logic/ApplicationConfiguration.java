package com.epam.meme.config.logic;

import com.epam.meme.config.logic.impl.HanaConfigurationImpl;
import com.epam.meme.config.logic.impl.PostgresConfigurationImpl;
import com.epam.meme.config.logic.impl.TestConfigurationImpl;
import org.eclipse.persistence.config.PersistenceUnitProperties;
import org.eclipse.persistence.config.TargetDatabase;
import org.eclipse.persistence.jpa.PersistenceProvider;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.*;
import org.springframework.core.env.Environment;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.orm.jpa.JpaTransactionManager;
import org.springframework.orm.jpa.JpaVendorAdapter;
import org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean;
import org.springframework.transaction.annotation.EnableTransactionManagement;

import javax.annotation.Resource;
import javax.sql.DataSource;
import java.util.Properties;

@Configuration
@ComponentScan({"com.epam.meme.service", "com.epam.meme.repository"})
@PropertySource("classpath:database.properties")
@EnableTransactionManagement
@EnableJpaRepositories("com.epam.meme.repository")
@Import({HanaConfigurationImpl.class, TestConfigurationImpl.class, PostgresConfigurationImpl.class})
public class ApplicationConfiguration {
    private static final String PROP_ECLIPSE_PACKAGES_TO_SCAN = "db.entitymanager.packages.to.scan";

    @Resource
    private Environment env;

    @Profile({"test", "dev"})
    @Bean(name = "entityManagerFactory")
    public LocalContainerEntityManagerFactoryBean entityManagerFactoryBean(
            DataSource dataSource,
            JpaVendorAdapter jpaVendorAdapter,
            Properties eclipseProperties) {

        LocalContainerEntityManagerFactoryBean entityManagerFactoryBean =
                new LocalContainerEntityManagerFactoryBean();

        entityManagerFactoryBean
                .setDataSource(dataSource);

        entityManagerFactoryBean
                .setPersistenceProviderClass(PersistenceProvider.class);

        entityManagerFactoryBean
                .setPackagesToScan(env.getRequiredProperty(PROP_ECLIPSE_PACKAGES_TO_SCAN));

        entityManagerFactoryBean
                .setJpaVendorAdapter(jpaVendorAdapter);

        entityManagerFactoryBean
                .setJpaProperties(eclipseProperties);

        return entityManagerFactoryBean;
    }

    @Profile("neo")
    @Bean
    public LocalContainerEntityManagerFactoryBean entityManagerFactory(
            DataSource dataSource,
            JpaVendorAdapter jpaVendorAdapter,
            Properties eclipseProperties) {

        LocalContainerEntityManagerFactoryBean entityManagerFactoryBean =
                new LocalContainerEntityManagerFactoryBean();

        entityManagerFactoryBean
                .setDataSource(dataSource);

        entityManagerFactoryBean
                .setJpaVendorAdapter(jpaVendorAdapter);

        entityManagerFactoryBean
                .setJpaProperties(eclipseProperties);

        entityManagerFactoryBean
                .setPersistenceXmlLocation("classpath:META-INF/persistence-hana.xml");

        entityManagerFactoryBean
                .setPersistenceUnitName("planningMemeHana");

        return entityManagerFactoryBean;
    }

    @Bean
    public JpaTransactionManager transactionManager(
            LocalContainerEntityManagerFactoryBean entityManagerFactoryBean) {

        JpaTransactionManager transactionManager = new JpaTransactionManager();
        transactionManager.setEntityManagerFactory(entityManagerFactoryBean.getObject());
        return transactionManager;
    }

    @Bean
    public ModelMapper modelMapper(){
        return new ModelMapper();
    }

    @Bean
    public Properties eclipseProperties() {
        Properties eclipseProperties = new Properties();

        eclipseProperties.setProperty(
                PersistenceUnitProperties.WEAVING,
                env.getProperty(PersistenceUnitProperties.WEAVING)
        );

        eclipseProperties.setProperty(
                PersistenceUnitProperties.DDL_GENERATION,
                env.getRequiredProperty(PersistenceUnitProperties.DDL_GENERATION)
        );

        eclipseProperties.setProperty(
                PersistenceUnitProperties.LOGGING_LEVEL,
                env.getProperty(PersistenceUnitProperties.LOGGING_LEVEL)
        );

        eclipseProperties.setProperty(
                PersistenceUnitProperties.LOGGING_PARAMETERS,
                env.getProperty(PersistenceUnitProperties.LOGGING_PARAMETERS)
        );

        return eclipseProperties;
    }
}
