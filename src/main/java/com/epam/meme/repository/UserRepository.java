package com.epam.meme.repository;

import com.epam.meme.entity.Board;
import com.epam.meme.entity.User;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {

    @Query("select user from User user where user.username = :username")
    Optional<User> findByUsername(@Param("username") String username);

    @Modifying(clearAutomatically = true)
    @Query("update User user set user.lastActivityTime = :curDate where user.username = :username")
    void updateByUsername(@Param("curDate") LocalDateTime curDate, @Param("username") String username);

    @Query("select user from User user where user.email = :email")
    Optional<User> findByEmail(@Param("email") String email);

    @Query("select board from User user join user.boards board where user.id = :id")
    Page<Board> findUserBoards(@Param("id") Long id, Pageable pageable);

//    @Modifying
//   @Query("delete from User user where user.lastActivityTime<=:curDate")
    @Query("select user from User user where user.lastActivityTime<=:curDate")
    List<User> deleteAllByTime(@Param("curDate") LocalDateTime curDate);
}
