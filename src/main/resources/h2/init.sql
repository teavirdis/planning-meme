-- Initial data for PLANNING_MEME database
INSERT INTO USERS(id, username, email, password) VALUES
(DEFAULT, 'user1', 'user1@gmail.com', 'qwerty'),
(DEFAULT, 'user2', 'user2@gmail.com', 'qwerty'),
(DEFAULT, 'user3', 'user3@gmail.com', 'qwerty'),
(DEFAULT, 'user4', 'user4@gmail.com', 'qwerty'),
(DEFAULT, 'user5', 'user5@gmail.com', 'qwerty');

INSERT INTO BOARDS(id, name, admin_id, start_time) VALUES
(DEFAULT, 'Board1', 1, '2018-01-01 14:44:00.367'),
(DEFAULT, 'Board2', 2, '2018-01-01 14:44:00.367');

INSERT INTO STORIES(id, description, ESTIMATION, START_TIME, FINISH_TIME, board_id) VALUES
(DEFAULT, 'No description', NULL, '2018-01-01 14:44:00.367', NULL,  1),
(DEFAULT, 'No description2', NULL, '2018-01-02 14:44:00.367', NULL,  1),
(DEFAULT, 'No description3', NULL, '2018-01-03 14:44:00.367', NULL,  1),
(DEFAULT, 'No description4', NULL, '2018-01-04 14:44:00.367', NULL,  1),
(DEFAULT, 'No description5', NULL, '2018-01-05 14:44:00.367', NULL,  1);

INSERT INTO BOARDS_USERS(user_id, board_id) VALUES
(1, 1),
(2, 1),
(3, 1),
(5, 1),
(1, 2),
(2, 2),
(3, 2),
(4, 2);

INSERT INTO VOTES(id, story_id, USER_ID, ROUND, ESTIMATION) VALUES
(DEFAULT, 1, 1, 1, 11),
(DEFAULT, 1, 2, 1, 8),
(DEFAULT, 1, 3, 1, 5),
(DEFAULT, 1, 5, 1, 8);
