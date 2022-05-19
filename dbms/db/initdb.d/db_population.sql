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
INSERT INTO Subcategory(subcategory_name, category_id) VALUES("How to get a korean phone", "4");
INSERT INTO Subcategory(subcategory_name, category_id) VALUES("How to change your data plan", "4");

-- Scenario Guide (Banking Specific)
INSERT INTO Phrase(phrase_text, phrase_text_kor, phrase_romanization) VALUES ("first phrase", "1번 문장", "onion haseyo");
INSERT INTO Phrase(phrase_text, phrase_text_kor, phrase_romanization) VALUES ("second phrase", "2번 문장", "onion haseyo 2");
INSERT INTO Phrase(phrase_text, phrase_text_kor, phrase_romanization) VALUES ("third phrase", "3번 문장", "onion haseyo 3");
INSERT INTO Phrase(phrase_text, phrase_text_kor, phrase_romanization) VALUES ("fourth phrase", "4번 문장", "onion haseyo 4");
INSERT INTO Phrase(phrase_text, phrase_text_kor, phrase_romanization) VALUES ("fifth phrase", "5번 문장", "onion haseyo 5");

INSERT INTO Phrase_Subcategory(phrase_id, subcategory_id) VALUES (1, 1);
INSERT INTO Phrase_Subcategory(phrase_id, subcategory_id) VALUES (2, 1);
INSERT INTO Phrase_Subcategory(phrase_id, subcategory_id) VALUES (3, 1);
INSERT INTO Phrase_Subcategory(phrase_id, subcategory_id) VALUES (4, 1);
INSERT INTO Phrase_Subcategory(phrase_id, subcategory_id) VALUES (5, 1);

INSERT INTO Phrase_Subcategory(phrase_id, subcategory_id) VALUES (1, 2);
INSERT INTO Phrase_Subcategory(phrase_id, subcategory_id) VALUES (2, 2);
INSERT INTO Phrase_Subcategory(phrase_id, subcategory_id) VALUES (3, 2);
INSERT INTO Phrase_Subcategory(phrase_id, subcategory_id) VALUES (4, 2);

INSERT INTO Keyword(keyword_text, keyword_text_kor, keyword_romanization) VALUES("first", "1번", "il bun");

INSERT INTO Keyword_Phrase(keyword_id, phrase_id) VALUES (1, 1);

-- Quiz (Banking Specific)
INSERT INTO Quiz_Question(question_text, subcategory_id) VALUES("Question 1", 1);
INSERT INTO Quiz_Question(question_text, subcategory_id) VALUES("Question 2", 1);
INSERT INTO Quiz_Question(question_text, subcategory_id) VALUES("Question 3", 1);
INSERT INTO Quiz_Question(question_text, subcategory_id) VALUES("Question 4", 1);
INSERT INTO Quiz_Question(question_text, subcategory_id) VALUES("Question 5", 1);

INSERT INTO Quiz_Answer(answer_text, explanation, is_correct) VALUES("Answer 1", "This is the explanation for answer 1", true);
INSERT INTO Quiz_Answer(answer_text, explanation, is_correct) VALUES("Answer 2", "This is the explanation for answer 2", false);
INSERT INTO Quiz_Answer(answer_text, explanation, is_correct) VALUES("Answer 3", "This is the explanation for answer 3", false);
INSERT INTO Quiz_Answer(answer_text, explanation, is_correct) VALUES("Answer 4", "This is the explanation for answer 4", false);

INSERT INTO Question_To_Answer(question_id, answer_id) VALUES(1, 1);
INSERT INTO Question_To_Answer(question_id, answer_id) VALUES(1, 2);
INSERT INTO Question_To_Answer(question_id, answer_id) VALUES(1, 3);
INSERT INTO Question_To_Answer(question_id, answer_id) VALUES(1, 4);
INSERT INTO Question_To_Answer(question_id, answer_id) VALUES(2, 1);
INSERT INTO Question_To_Answer(question_id, answer_id) VALUES(3, 1);
INSERT INTO Question_To_Answer(question_id, answer_id) VALUES(4, 1);
INSERT INTO Question_To_Answer(question_id, answer_id) VALUES(5, 1);

-- Document Helper (Banking Specific)
INSERT INTO Document(document_title, document_title_kor, has_details) VALUES ("Alien Registration Card", "외국인등록증", true);
INSERT INTO Document(document_title, document_title_kor, has_details) VALUES ("Passport / Visa", "여권 / 비자", false);

INSERT INTO Document_Subcategory(document_id, subcategory_id) VALUES(1, 1);
INSERT INTO Document_Subcategory(document_id, subcategory_id) VALUES(1, 2);
INSERT INTO Document_Subcategory(document_id, subcategory_id) VALUES(2, 1);

INSERT INTO Entry(entry_index, entry_title, entry_text, entry_image, document_id) VALUES(1, "About Alien Registration Card", "Foreigners who will be staying in Korea for more than 90 days (i.e work/study) are required to apply for Alien Registration Card (ARC). Exemptions: Holders of A-1, A-2 and A-3 visa", "https://www3.chosun.ac.kr/sites/eng/images/content/img_visa_2021.png", 1);
INSERT INTO Entry(entry_index, entry_title, entry_text, entry_image, document_id) VALUES(2, "Requirements", "Passport& 3cm x 4cm picture& Document for respective Visa type (ex: Proof of employment, Proof of enrollment)& Application form& Application fee: KRW 30,000", "image url", 1);
INSERT INTO Entry(entry_index, entry_title, entry_text, entry_image, document_id) VALUES(3, "Application Procedure", "Make an online reservation to visit an Immigration office or a branch through HiKorea.& Visit the office with the required documents.& Collect the card when ready.", "image url", 1);
INSERT INTO Entry(entry_index, entry_title, entry_text, entry_image, document_id) VALUES(4, "Useful links", "Link to HiKorea > https://www.hikorea.go.kr/Main.pt", "image url", 1);


INSERT INTO Entry(entry_index, entry_title, entry_text, entry_image, document_id) VALUES(1, "Entry 1", "doc2 text1", "image url", 2);
INSERT INTO Entry(entry_index, entry_title, entry_text, entry_image, document_id) VALUES(2, "Entry 2", "doc2 text2", "image url", 2);
INSERT INTO Entry(entry_index, entry_title, entry_text, entry_image, document_id) VALUES(3, "Entry 3", "doc2 text3", "image url", 2);
INSERT INTO Entry(entry_index, entry_title, entry_text, entry_image, document_id) VALUES(3, "Entry 4", "doc2 text4", "image url", 2);

-- App Catalog 

INSERT INTO Tag(tag_title) VALUES("Tag 1");
INSERT INTO Tag(tag_title) VALUES("Tag 2");
INSERT INTO Tag(tag_title) VALUES("Tag 3");

INSERT INTO App(app_title, app_title_kor, app_text, app_image) VALUES("App 1", '1번 앱', "App 1 Text", "app 1 image url");
INSERT INTO App(app_title, app_title_kor, app_text, app_image) VALUES("App 2", "2번 앱", "App 2 Text", "app 2 image url");
INSERT INTO App(app_title, app_title_kor, app_text, app_image) VALUES("App 3", "3번 앱", "App 3 Text", "app 3 image url");

INSERT INTO App_Platform(app_id, platform_title, platform_store_link, platform_qr_code, has_english) VALUES (1, "Google", "app 1 google link", "app 1 qr code", true);
INSERT INTO App_Platform(app_id, platform_title, platform_store_link, platform_qr_code, has_english) VALUES (1, "Apple", "app 1 apple link", "app 1 qr code", true);
INSERT INTO App_Platform(app_id, platform_title, platform_store_link, platform_qr_code, has_english) VALUES (2, "Google", "app 2 google link", "app 2 qr code", false);
INSERT INTO App_Platform(app_id, platform_title, platform_store_link, platform_qr_code, has_english) VALUES (3, "Apple", "app 3 apple link", "app 3 qr code", true);

INSERT INTO App_Tag(app_id, tag_id) VALUES (1, 1);
INSERT INTO App_Tag(app_id, tag_id) VALUES (1, 2);
INSERT INTO App_Tag(app_id, tag_id) VALUES (1, 3);
INSERT INTO App_Tag(app_id, tag_id) VALUES (2, 2);
INSERT INTO App_Tag(app_id, tag_id) VALUES (3, 3);

INSERT INTO App_Info_Block(info_title, info_index, info_text, info_image, app_id) VALUES ("Info Title 1", 1, "text 1", "image 1", 1);
INSERT INTO App_Info_Block(info_title, info_index, info_text, info_image, app_id) VALUES ("Info Title 2", 2, "text 2", "image 2", 1);
INSERT INTO App_Info_Block(info_title, info_index, info_text, info_image, app_id) VALUES ("Info Title 3", 3, "text 3", "image 3", 1);
INSERT INTO App_Info_Block(info_title, info_index, info_text, info_image, app_id) VALUES ("Info Title 4", 4, "text 4", "image 4", 1);

INSERT INTO App_Info_Block(info_title, info_index, info_text, info_image, app_id) VALUES ("Info Title 1", 1, "text 1", "image 1", 2);
INSERT INTO App_Info_Block(info_title, info_index, info_text, info_image, app_id) VALUES ("Info Title 2", 2, "text 2", "image 2", 2);
INSERT INTO App_Info_Block(info_title, info_index, info_text, info_image, app_id) VALUES ("Info Title 3", 3, "text 3", "image 3", 2);

INSERT INTO App_Info_Block(info_title, info_index, info_text, info_image, app_id) VALUES ("Info Title 1", 1, "text 1", "image 1", 3);
INSERT INTO App_Info_Block(info_title, info_index, info_text, info_image, app_id) VALUES ("Info Title 2", 2, "text 2", "image 2", 3);