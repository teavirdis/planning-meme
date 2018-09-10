-- Initial data for PLANNING_MEME database
INSERT INTO USERS(username, email, password) VALUES
('user1', 'user1@gmail.com', 'qwerty'),
('user2', 'user2@gmail.com', 'qwerty'),
('user3', 'user3@gmail.com', 'qwerty'),
('user4', 'user4@gmail.com', 'qwerty'),
('user5', 'user5@gmail.com', 'qwerty');

INSERT INTO BOARDS(name, admin_id) VALUES
('Board1', 1),
('Board2', 2);

INSERT INTO STORIES(description, ESTIMATION, START_TIME, FINISH_TIME, board_id) VALUES
('No description', NULL, '2018-01-01 14:44:00.367', NULL,  1),
('No description2', NULL, '2018-01-02 14:44:00.367', NULL,  1),
('No description3', NULL, '2018-01-03 14:44:00.367', NULL,  1),
('No description4', NULL, '2018-01-04 14:44:00.367', NULL,  1),
('No description5', NULL, '2018-01-05 14:44:00.367', NULL,  1);

INSERT INTO BOARDS_USERS(user_id, board_id) VALUES
(1, 1),
(2, 1),
(3, 1),
(5, 1),
(1, 2),
(2, 2),
(3, 2),
(4, 2);

INSERT INTO VOTES(story_id, USER_ID, ROUND, ESTIMATION) VALUES
(1, 1, 1, 11),
(1, 2, 1, 8),
(1, 3, 1, 5),
(1, 5, 1, 8);