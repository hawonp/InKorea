-- Data Population for Categories / Subcategories
INSERT INTO Category(category_name) VALUES("Banking");
INSERT INTO Category(category_name) VALUES("Health");
INSERT INTO Category(category_name) VALUES("Housing");
INSERT INTO Category(category_name) VALUES("Mobile");

-- Subcategory (Banking)
INSERT INTO Subcategory(subcategory_name, category_id) VALUES("Creating a bank account", "1");
INSERT INTO Subcategory(subcategory_name, category_id) VALUES("How to use an ATM", "1");

-- Subcategory (Health)
INSERT INTO Subcategory(subcategory_name, category_id) VALUES("How to get basic health insurance", "2");
INSERT INTO Subcategory(subcategory_name, category_id) VALUES("How to upgrade your health insurance", "2");

-- Subcategory (Housing)
INSERT INTO Subcategory(subcategory_name, category_id) VALUES("How to get a house (Jeonse)", "3");
INSERT INTO Subcategory(subcategory_name, category_id) VALUES("How to get a house (Rent)", "3");

-- Subcategory (Mobile)
INSERT INTO Subcategory(subcategory_name, category_id) VALUES("How to get basic health insurance", "4");
INSERT INTO Subcategory(subcategory_name, category_id) VALUES("How to upgrade your health insurance", "4");

-- Scenario Guide (Banking Specific)
INSERT INTO Phrase(phrase_text, phrase_text_kor, phrase_audio_link) VALUES ("first phrase", "1번 문장", "random link");
INSERT INTO Phrase(phrase_text, phrase_text_kor, phrase_audio_link) VALUES ("second phrase", "2번 문장", "random link");
INSERT INTO Phrase(phrase_text, phrase_text_kor, phrase_audio_link) VALUES ("third phrase", "3번 문장", "random link");
INSERT INTO Phrase(phrase_text, phrase_text_kor, phrase_audio_link) VALUES ("fourth phrase", "4번 문장", "random link");
INSERT INTO Phrase(phrase_text, phrase_text_kor, phrase_audio_link) VALUES ("fifth phrase", "5번 문장", "random link");

INSERT INTO Phrase_Start(subcategory_id, phrase_id) VALUES (1, 1);
INSERT INTO Phrase_Link(from_id, to_id) VALUES (1, 2);
INSERT INTO Phrase_Link(from_id, to_id) VALUES (2, 3);
INSERT INTO Phrase_Link(from_id, to_id) VALUES (4, 5);

-- Document Helper (Banking Specific)
INSERT INTO Document(document_title, has_details) VALUES ("");

SELECT * FROM Phrase_Link;