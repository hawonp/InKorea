-- ------------ DATABASE INITIALISATION ------------
DROP DATABASE IF EXISTS inkorea_db;
DROP USER IF EXISTS 'mod'@'localhost';
CREATE DATABASE inkorea_db CHARACTER SET utf8 COLLATE utf8_bin;

-- TODO adjust for server when uploaded
CREATE USER 'mod'@'localhost' IDENTIFIED by 'inkorea';

GRANT ALL PRIVILEGES ON inkorea_db.* to 'mod'@'localhost' identified by 'inkorea';

USE inkorea_db;

CREATE TABLE Test_Table(
    user_id INTEGER,
    PRIMARY KEY(user_id)

);