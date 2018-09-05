package com.epam.meme.dao;

import java.util.Optional;

public interface BaseDao<T> {

    /**
     * Adds new entity to the storage.
     *
     * @param entity to add
     */
    void add(T entity);

    /**
     * Finds entity entity in storage by id specified.
     *
     * @param entityId to find by
     * @return entity wrapped in optional if found, e,pty optional otherwise
     */
    Optional<T> findById(Long entityId);

    /**
     * Finds entity in data storage and updates its attributes with the attributes of the entity
     * passed  as parameter.
     *
     * @param entity to fetch new attribute values
     * @return true if entity has been found and updated, false otherwise
     */
    boolean update(T entity);

    /**
     * Deletes entity from the storage if it is present.
     *
     * @param entity to delete
     * @return true if entity has been found and deleted, false otherwise
     */
    boolean delete(T entity);
}
