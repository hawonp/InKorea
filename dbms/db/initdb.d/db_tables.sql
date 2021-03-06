-- ------------ DATABASE INITIALISATION ------------
SET character_set_server = 'utf8';
SET collation_server = 'utf8_bin';

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
    subcategory_description VARCHAR(1024),
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
    phrase_romanization VARCHAR(1000),
    PRIMARY KEY(phrase_id)
);

CREATE TABLE Phrase_Subcategory(
    phrase_id INTEGER NOT NULL,
    subcategory_id INTEGER NOT NULL,
    PRIMARY KEY(phrase_id, subcategory_id),
    FOREIGN KEY (phrase_id) REFERENCES Phrase(phrase_id) ON DELETE CASCADE,
    FOREIGN KEY (subcategory_id) REFERENCES Subcategory(subcategory_id) ON DELETE CASCADE
);

CREATE TABLE Keyword(
    keyword_id INTEGER NOT NULL AUTO_INCREMENT, 
    keyword_text VARCHAR(100),
    keyword_text_kor VARCHAR(100),
    keyword_explanation VARCHAR(100),
    keyword_romanization VARCHAR(1000),
    PRIMARY KEY(keyword_id)
);

CREATE TABLE Keyword_Phrase(
    keyword_id INTEGER NOT NULL, 
    phrase_id INTEGER NOT NULL,
    PRIMARY KEY(keyword_id, phrase_id),
    FOREIGN KEY (keyword_id) REFERENCES Keyword(keyword_id) ON DELETE CASCADE,
    FOREIGN KEY (phrase_id) REFERENCES Phrase(phrase_id) ON DELETE CASCADE
);

-- DOCUMENT HELPER SPECIFIC TABLES
CREATE TABLE Document(
    document_id INTEGER NOT NULL AUTO_INCREMENT,
    document_title VARCHAR(100),
    document_title_kor VARCHAR(100),
    has_details BOOLEAN,
    PRIMARY KEY(document_id)
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
    entry_text VARCHAR(512),
    entry_image VARCHAR(1024),
    document_id INTEGER,
    PRIMARY KEY(entry_id),
    FOREIGN KEY (document_id) REFERENCES Document(document_id) ON DELETE CASCADE
);

-- APP CATALOG SPECIFIC TABLES
CREATE TABLE App(
    app_id INTEGER NOT NULL AUTO_INCREMENT,
    app_title VARCHAR(100),
    app_title_kor VARCHAR(100),
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
    info_index INTEGER NOT NULL,
    info_title VARCHAR(100),
    info_text VARCHAR(1000),
    info_image VARCHAR(1000),
    app_id INTEGER,
    PRIMARY KEY(info_id, app_id),
    FOREIGN KEY (app_id) REFERENCES App(app_id) ON DELETE CASCADE
);

CREATE TABLE App_Images(
    app_id INTEGER,
    img_src VARCHAR(1000),
    PRIMARY KEY(app_id, img_src),
    FOREIGN KEY (app_id) REFERENCES App(app_id) ON DELETE CASCADE
)