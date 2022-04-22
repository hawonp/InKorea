-- ------------ DATABASE INITIALISATION ------------
DROP DATABASE IF EXISTS inkorea_db;
DROP USER IF EXISTS 'mod'@'localhost';
CREATE DATABASE inkorea_db CHARACTER SET utf8 COLLATE utf8_bin;

-- TODO adjust for server when uploaded
CREATE USER 'mod'@'localhost' IDENTIFIED by 'inkorea';

GRANT ALL PRIVILEGES ON inkorea_db.* to 'mod'@'localhost' identified by 'inkorea';

USE inkorea_db;


-- TABLE INITIALIZATION
CREATE TABLE Category(
    category_id INTEGER NOT NULL AUTO_INCREMENT,
    category_name VARCHAR(100),
    PRIMARY KEY(category_id)
);

CREATE TABLE Subcategory(
    subcategory_id INTEGER NOT NULL AUTO_INCREMENT,
    subcategory_name VARCHAR(100),
    category_id INTEGER,
    PRIMARY KEY(subcategory_id),
    FOREIGN KEY (category_id) REFERENCES Category(category_id) ON DELETE CASCADE
);

-- QUIZ SPECIFIC TABLES
CREATE TABLE Quiz_Question(
    question_id INTEGER NOT NULL AUTO_INCREMENT,
    question_text VARCHAR(100),
    subcategory_id INTEGER,
    PRIMARY KEY (question_id),
    FOREIGN KEY (subcategory_id) REFERENCES Subcategory(subcategory_id) ON DELETE CASCADE
);

CREATE TABLE Quiz_Answer(
    answer_id INTEGER NOT NULL AUTO_INCREMENT,
    answer_text VARCHAR(100),
    explanation VARCHAR(100),
    is_correct BOOLEAN,
    PRIMARY KEY(answer_id)
);

CREATE TABLE Question_To_Answer(
    question_id INTEGER,
    answer_id INTEGER,
    PRIMARY KEY(question_id, answer_id),
    FOREIGN KEY (question_id) REFERENCES Quiz_Question(question_id) ON DELETE CASCADE,
    FOREIGN KEY (answer_id) REFERENCES Quiz_Answer(answer_id) ON DELETE CASCADE
);

-- SCENARIO GUIDE SPECIFIC TABLES
CREATE TABLE Phrase(
    phrase_id INTEGER NOT NULL AUTO_INCREMENT,
    phrase_text VARCHAR(100),
    phrase_text_kor VARCHAR(100),
    phrase_audio_link VARCHAR(1000),
    PRIMARY KEY(phrase_id)
);

CREATE TABLE Phrase_Link(
    from_id INTEGER,
    to_id INTEGER,
    PRIMARY KEY (from_id, to_id),
    FOREIGN KEY (from_id) REFERENCES Phrase(phrase_id) ON DELETE CASCADE,
    FOREIGN KEY (to_id) REFERENCES Phrase(phrase_id) ON DELETE CASCADE
);

CREATE TABLE Phrase_Start(
    subcategory_id INTEGER,
    phrase_id INTEGER,    
    PRIMARY KEY (subcategory_id, phrase_id),
    FOREIGN KEY (subcategory_id) REFERENCES Subcategory(subcategory_id) ON DELETE CASCADE,
    FOREIGN KEY (phrase_id) REFERENCES Phrase(phrase_id) ON DELETE CASCADE
);

-- DOCUMENT HELPER SPECIFIC TABLES
CREATE TABLE Document(
    document_id INTEGER NOT NULL AUTO_INCREMENT,
    document_title VARCHAR(100),
    has_details BOOLEAN,
    subcategory_id INTEGER,
    PRIMARY KEY(document_id),
    FOREIGN KEY (subcategory_id) REFERENCES Subcategory(subcategory_id) ON DELETE CASCADE
);

CREATE TABLE Document_Subcategory(
    document_id INTEGER NOT NULL,
    subcategory_id INTEGER NOT NULL,
    PRIMARY KEY(document_id, subcategory_id),
    FOREIGN KEY (document_id) REFERENCES Document(document_id) ON DELETE CASCADE,
    FOREIGN KEY (subcategory_id) REFERENCES Subcategory(subcategory_id) ON DELETE CASCADE
);

CREATE TABLE Entry(
    entry_id INTEGER NOT NULL AUTO_INCREMENT,
    entry_index INTEGER NOT NULL,
    entry_title VARCHAR(100),
    entry_text VARCHAR(100),
    entry_image VARCHAR(1000),
    document_id INTEGER,
    PRIMARY KEY(entry_id),
    FOREIGN KEY (document_id) REFERENCES Document(document_id) ON DELETE CASCADE
);

-- APP CATALOG SPECIFIC TABLES
CREATE TABLE App(
    app_id INTEGER NOT NULL AUTO_INCREMENT,
    app_title VARCHAR(100),
    app_text VARCHAR(1000),
    app_image VARCHAR(1000),
    PRIMARY KEY(app_id)
);

CREATE TABLE App_Platform(
    app_id INTEGER,
    platform_title VARCHAR(100),
    platform_store_link VARCHAR(1000),
    platform_qr_code VARCHAR(1000),
    has_english BOOLEAN,
    PRIMARY KEY(app_id, platform_title),
    FOREIGN KEY (app_id) REFERENCES App(app_id) ON DELETE CASCADE
);

CREATE TABLE Tag(
    tag_id INTEGER NOT NULL AUTO_INCREMENT,
    tag_title VARCHAR(100),
    PRIMARY KEY(tag_id)
);

CREATE TABLE App_Tag(
    app_id INTEGER,
    tag_id INTEGER,   
    PRIMARY KEY (app_id, tag_id),
    FOREIGN KEY (app_id) REFERENCES App(app_id) ON DELETE CASCADE,
    FOREIGN KEY (tag_id) REFERENCES Tag(tag_id) ON DELETE CASCADE
);

CREATE TABLE App_Info_Block(
    info_id INTEGER NOT NULL AUTO_INCREMENT,
    info_title VARCHAR(100),
    info_text VARCHAR(1000),
    info_image VARCHAR(1000),
    app_id INTEGER,
    PRIMARY KEY(app_id, info_id),
    FOREIGN KEY (app_id) REFERENCES App(app_id) ON DELETE CASCADE
);