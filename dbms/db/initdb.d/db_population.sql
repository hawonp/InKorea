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
INSERT INTO Phrase(phrase_text, phrase_text_kor, phrase_romanization) VALUES ("I would like to make a checking account.", "예금 계좌 하나 만들어 주세요", "yegeum gyejwa hana mandeureo juseyo");
INSERT INTO Phrase(phrase_text, phrase_text_kor, phrase_romanization) VALUES ("Do you have your id-card?", "신분증 있으신가요?", "sinbunjeung isseusingayo?");
INSERT INTO Phrase(phrase_text, phrase_text_kor, phrase_romanization) VALUES ("Can you enter the four digits of the password you want to use?", "계좌에 사용하실 비밀번호 네자리 입력해주시겠어요?", "gyejwa sayonghasil bimilbeonho ne-jari ipryeokhaejusigesseoyo?");
INSERT INTO Phrase(phrase_text, phrase_text_kor, phrase_romanization) VALUES ("Do you want to make a savings account?", "적금 계좌 만드시겠어요?", "jukgeum gyejwa mandeusi gesseoyo?");


INSERT INTO Phrase_Subcategory(phrase_id, subcategory_id) VALUES (1, 1);
INSERT INTO Phrase_Subcategory(phrase_id, subcategory_id) VALUES (2, 1);
INSERT INTO Phrase_Subcategory(phrase_id, subcategory_id) VALUES (3, 1);
INSERT INTO Phrase_Subcategory(phrase_id, subcategory_id) VALUES (4, 1);

INSERT INTO Keyword(keyword_text, keyword_explanation, keyword_romanization) VALUES("계좌", "계좌 is the korean word for account", "gyejwa");
INSERT INTO Keyword(keyword_text, keyword_explanation, keyword_romanization) VALUES("예금 계좌", "예금 계좌 indicates a checkings account", "yegeum gyejwa");
INSERT INTO Keyword(keyword_text, keyword_explanation, keyword_romanization) VALUES("적금 계좌", "적금 계좌 indicates a savings account", "jukgeum gyejwa");
INSERT INTO Keyword(keyword_text, keyword_explanation, keyword_romanization) VALUES("신분증", "신분증 indicates a national id card", "shin bun jjeung");
INSERT INTO Keyword(keyword_text, keyword_explanation, keyword_romanization) VALUES("비밀번호",  "비밀번호 means password", "bimil bunho");

INSERT INTO Keyword_Phrase(keyword_id, phrase_id) VALUES (1, 1);
INSERT INTO Keyword_Phrase(keyword_id, phrase_id) VALUES (2, 1);
INSERT INTO Keyword_Phrase(keyword_id, phrase_id) VALUES (4, 2);
INSERT INTO Keyword_Phrase(keyword_id, phrase_id) VALUES (5, 3);
INSERT INTO Keyword_Phrase(keyword_id, phrase_id) VALUES (1, 4);
INSERT INTO Keyword_Phrase(keyword_id, phrase_id) VALUES (3, 4);

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

INSERT INTO Tag(tag_title) VALUES("Transportation");
INSERT INTO Tag(tag_title) VALUES("Communication");
INSERT INTO Tag(tag_title) VALUES("Banking");
INSERT INTO Tag(tag_title) VALUES("Food");

INSERT INTO App(app_title, app_title_kor, app_text, app_image) VALUES("Naver Maps", '네이버 지도', "App 1 Text", "app 1 image url");
INSERT INTO App(app_title, app_title_kor, app_text, app_image) VALUES("Kakao Talk", "카카오톡", "App 2 Text", "app 2 image url");
INSERT INTO App(app_title, app_title_kor, app_text, app_image) VALUES("Kakao Maps", "카카오 맵", "App 3 Text", "app 3 image url");
INSERT INTO App(app_title, app_title_kor, app_text, app_image) VALUES("Toss", "토스", "App 4 Text", "app 3 image url");
INSERT INTO App(app_title, app_title_kor, app_text, app_image) VALUES("Coupang Eats", "쿠팡이츠", "App 5 Text", "app 3 image url");

INSERT INTO App_Platform(app_id, platform_title, platform_store_link, platform_qr_code, has_english) VALUES (1, "Google", "https://play.google.com/store/apps/details?id=com.nhn.android.nmap&hl=en&gl=US", "app 1 qr code", true);
INSERT INTO App_Platform(app_id, platform_title, platform_store_link, platform_qr_code, has_english) VALUES (1, "Apple", "https://apps.apple.com/us/app/naver-map-navigation/id311867728", "app 1 qr code", true);
INSERT INTO App_Platform(app_id, platform_title, platform_store_link, platform_qr_code, has_english) VALUES (2, "Google", "https://play.google.com/store/apps/details?id=com.kakao.talk&hl=en&gl=US", "app 2 qr code", true);
INSERT INTO App_Platform(app_id, platform_title, platform_store_link, platform_qr_code, has_english) VALUES (2, "Apple", "https://apps.apple.com/us/app/kakaotalk/id362057947", "app 2 qr code", true);
INSERT INTO App_Platform(app_id, platform_title, platform_store_link, platform_qr_code, has_english) VALUES (3, "Google", "https://play.google.com/store/apps/details?id=net.daum.android.map&hl=en&gl=US", "app 3 qr code", false);
INSERT INTO App_Platform(app_id, platform_title, platform_store_link, platform_qr_code, has_english) VALUES (3, "Apple", "https://apps.apple.com/us/app/kakaomap-korea-no-1-map/id304608425", "app 3 qr code", false);
INSERT INTO App_Platform(app_id, platform_title, platform_store_link, platform_qr_code, has_english) VALUES (4, "Google", "https://play.google.com/store/apps/details?id=im.toss.arc&hl=en&gl=US", "app 4 qr code", false);
INSERT INTO App_Platform(app_id, platform_title, platform_store_link, platform_qr_code, has_english) VALUES (4, "Apple", "https://apps.apple.com/kr/app/%ED%86%A0%EC%8A%A4/id839333328", "app 4 qr code", false);
INSERT INTO App_Platform(app_id, platform_title, platform_store_link, platform_qr_code, has_english) VALUES (4, "Google", "https://play.google.com/store/apps/details?id=com.coupang.mobile.eats&hl=en&gl=US", "app 5 qr code", true);
INSERT INTO App_Platform(app_id, platform_title, platform_store_link, platform_qr_code, has_english) VALUES (4, "Apple", "https://apps.apple.com/us/app/coupang-eats/id1445504255", "app 5 qr code", true);

INSERT INTO App_Tag(app_id, tag_id) VALUES (1, 1);
INSERT INTO App_Tag(app_id, tag_id) VALUES (2, 2);
INSERT INTO App_Tag(app_id, tag_id) VALUES (3, 1);
INSERT INTO App_Tag(app_id, tag_id) VALUES (4, 3);
INSERT INTO App_Tag(app_id, tag_id) VALUES (5, 4);

INSERT INTO App_Info_Block(info_title, info_index, info_text, info_image, app_id) VALUES ("About Naver Maps", 1, "Naver maps is a map and navigator application for people who want to get around Korea. With its access to the Korean map data and English support, it makes navigating around Korean easier.", "image url", 1);
INSERT INTO App_Info_Block(info_title, info_index, info_text, info_image, app_id) VALUES ("How to find a location", 2, "Tap on the search bar at the top and search for your destination.", "image url", 1);

INSERT INTO App_Info_Block(info_title, info_index, info_text, info_image, app_id) VALUES ("About Kakao Talk", 1, "Kakao Talk is the most popular messaging service in Korea. It is an app that almost everyone uses, and is hence commonly used as the medium of communication.", "image url", 1);
INSERT INTO App_Info_Block(info_title, info_index, info_text, info_image, app_id) VALUES ("How to add a friend", 2, "Tap on the + button at the top and add.", "image url", 1);

INSERT INTO App_Info_Block(info_title, info_index, info_text, info_image, app_id) VALUES ("Info Title 1", 1, "text 1", "image 1", 3);
INSERT INTO App_Info_Block(info_title, info_index, info_text, info_image, app_id) VALUES ("Info Title 2", 2, "text 2", "image 2", 3);