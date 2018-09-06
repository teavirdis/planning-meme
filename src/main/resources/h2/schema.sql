DROP TABLE IF EXISTS USERS;
DROP TABLE IF EXISTS STORIES;
DROP TABLE IF EXISTS VOTES;
DROP TABLE IF EXISTS BOARDS;
DROP TABLE IF EXISTS USERS_VOTES;
DROP TABLE IF EXISTS BOARDS_USERS;
DROP TABLE IF EXISTS ESTIMATE_STORIES;

CREATE TABLE IF NOT EXISTS USERS
(
  ID BIGINT AUTO_INCREMENT PRIMARY KEY NOT NULL,
  USERNAME VARCHAR(50) UNIQUE NOT NULL,
  EMAIL    VARCHAR(50) UNIQUE NOT NULL,
  PASSWORD VARCHAR(50) NOT NULL
);

CREATE TABLE IF NOT EXISTS STORIES
(
  ID BIGINT AUTO_INCREMENT PRIMARY KEY NOT NULL,
  DESCRIPTION VARCHAR(1024) NOT NULL,
);


CREATE TABLE IF NOT EXISTS VOTES
(
  ID BIGINT AUTO_INCREMENT PRIMARY KEY NOT NULL,
  STORY_ID BIGINT NOT NULL CONSTRAINT votes_stories_id_fk REFERENCES STORIES,
  START_DATE  TIMESTAMP NOT NULL,
  FINISH_DATE TIMESTAMP NOT NULL
);

CREATE TABLE IF NOT EXISTS BOARDS
(
  ID BIGINT AUTO_INCREMENT PRIMARY KEY NOT NULL,
  NAME VARCHAR(50) NOT NULL,
  ADMIN_ID BIGINT NOT NULL CONSTRAINT boards_users_id_fk REFERENCES users
);

CREATE TABLE IF NOT EXISTS ESTIMATE_STORIES
(
  ID BIGINT AUTO_INCREMENT PRIMARY KEY NOT NULL,
  STORY_ID BIGINT NOT NULL CONSTRAINT stories_answered_stories REFERENCES STORIES,
  ESTIMATE SMALLINT NOT NULL
);

CREATE TABLE IF NOT EXISTS USERS_VOTES
(
  VOTE_ID  BIGINT NOT NULL CONSTRAINT users_votes_votes_id_fk REFERENCES VOTES,
  USER_ID BIGINT NOT NULL CONSTRAINT users_votes_users_id_fk REFERENCES USERS,
  ESTIMATE SMALLINT NOT NULL
);

CREATE TABLE IF NOT EXISTS BOARDS_USERS
(
  USER_ID BIGINT NOT NULL CONSTRAINT boards_users_users_id_fk REFERENCES USERS,
  BOARD_ID BIGINT NOT NULL CONSTRAINT boards_users_boards_id_fk REFERENCES BOARDS
);

