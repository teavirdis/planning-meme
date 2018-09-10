--Insert into users
INSERT INTO USERS(id, username, email, password) VALUES(1, 'user1', 'user1@gmail.com', 'qwerty');
INSERT INTO USERS(id, username, email, password) VALUES(2, 'user2', 'user2@gmail.com', 'qwerty');
INSERT INTO USERS(id, username, email, password) VALUES(3, 'user3', 'user3@gmail.com', 'qwerty');
INSERT INTO USERS(id, username, email, password) VALUES(4, 'user4', 'user4@gmail.com', 'qwerty');
INSERT INTO USERS(id, username, email, password) VALUES(5, 'user5', 'user5@gmail.com', 'qwerty');

--Insert into boards
INSERT INTO BOARDS(id, name, admin_id) VALUES(1, 'Board1', 1);
INSERT INTO BOARDS(id, name, admin_id) VALUES(2, 'Board2', 2);

--Insert into stories
INSERT INTO STORIES(id, description, board_id, start_time, finish_time, estimation) VALUES(1, 'No description', 1, '2018-04-05', '2018-04-05', 5);
INSERT INTO STORIES(id, description, board_id, start_time, finish_time, estimation) VALUES(2, 'No description2', 1, '2018-04-05', '2018-04-05', 5);
INSERT INTO STORIES(id, description, board_id, start_time, finish_time, estimation) VALUES(3, 'No description3', 1, '2018-04-05', '2018-04-05', 5);
INSERT INTO STORIES(id, description, board_id, start_time, finish_time, estimation) VALUES(4, 'No description4', 1, '2018-04-05', '2018-04-05', 5);
INSERT INTO STORIES(id, description, board_id, start_time, finish_time, estimation) VALUES(5, 'No description5', 1, '2018-04-05', '2018-04-05', 5);

--Insert into votes
INSERT INTO VOTES(id, story_id, user_id, round, estimation) VALUES(1, 1, 1, 1, 5);
INSERT INTO VOTES(id, story_id, user_id, round, estimation) VALUES(2, 1, 1, 2, 5);
INSERT INTO VOTES(id, story_id, user_id, round, estimation) VALUES(3, 2, 1, 1, 5);
INSERT INTO VOTES(id, story_id, user_id, round, estimation) VALUES(4, 3, 1, 1, 5);
INSERT INTO VOTES(id, story_id, user_id, round, estimation) VALUES(5, 3, 1, 2, 5);
INSERT INTO VOTES(id, story_id, user_id, round, estimation) VALUES(6, 4, 1, 1, 5);
INSERT INTO VOTES(id, story_id, user_id, round, estimation) VALUES(7, 4, 1, 2, 5);
INSERT INTO VOTES(id, story_id, user_id, round, estimation) VALUES(8, 5, 1, 1, 5);

--Insert into boards_users
INSERT INTO BOARDS_USERS(user_id, board_id) VALUES(1, 1);
INSERT INTO BOARDS_USERS(user_id, board_id) VALUES(2, 1);
INSERT INTO BOARDS_USERS(user_id, board_id) VALUES(3, 1);
INSERT INTO BOARDS_USERS(user_id, board_id) VALUES(5, 1);

INSERT INTO BOARDS_USERS(user_id, board_id) VALUES(1, 2);
INSERT INTO BOARDS_USERS(user_id, board_id) VALUES(2, 2);
INSERT INTO BOARDS_USERS(user_id, board_id) VALUES(3, 2);
INSERT INTO BOARDS_USERS(user_id, board_id) VALUES(5, 2);

