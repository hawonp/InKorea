-- Data Population for Categories / Subcategories
INSERT INTO Category(category_name) VALUES("Banking");
INSERT INTO Category(category_name) VALUES("Health");
INSERT INTO Category(category_name) VALUES("Housing");
INSERT INTO Category(category_name) VALUES("Mobile");

-- Subcategory (Banking)
INSERT INTO Subcategory(subcategory_name, subcategory_description, category_id) VALUES("Creating a bank account", "This will help you in case you go to the bank to make a bank account and when the clerk does not know how to speak fluent English. However, most bank branch will have at least one clerk who can speak English fluently enough to guide you through the process of making a bank account.", "1");
INSERT INTO Subcategory(subcategory_name, subcategory_description, category_id) VALUES("Using an ATM", "Subcategory description", "1");

-- Subcategory (Health)
INSERT INTO Subcategory(subcategory_name, subcategory_description, category_id) VALUES("Getting basic health insurance", "Subcategory description", "2");
INSERT INTO Subcategory(subcategory_name, subcategory_description, category_id) VALUES("Upgrading your health insurance", "Subcategory description", "2");

-- Subcategory (Housing)
INSERT INTO Subcategory(subcategory_name, subcategory_description, category_id) VALUES("Getting a house (Jeonse)", "Subcategory description", "3");
INSERT INTO Subcategory(subcategory_name, subcategory_description, category_id) VALUES("Getting a house (Rent)", "Subcategory description", "3");

-- Subcategory (Mobile)
INSERT INTO Subcategory(subcategory_name, subcategory_description, category_id) VALUES("Getting a korean sim", "This will help you to get a Korean sim and activate your phone in Korea.", "4");
INSERT INTO Subcategory(subcategory_name, subcategory_description, category_id) VALUES("Changing your data plan", "Subcategory description", "4");

-- -- Phrases (Banking Specific)
INSERT INTO Phrase(phrase_text, phrase_text_kor, phrase_romanization) VALUES ("I would like to make a checking account.", "예금 계좌 하나 만들어 주세요", "yegeum gyejwa hana mandeureo juseyo");
INSERT INTO Phrase(phrase_text, phrase_text_kor, phrase_romanization) VALUES ("Do you have your id-card?", "신분증 있으신가요?", "sinbunjeung isseusingayo?");
INSERT INTO Phrase(phrase_text, phrase_text_kor, phrase_romanization) VALUES ("Can you enter the four digits of the password you want to use?", "계좌에 사용하실 비밀번호 네자리 입력해주시겠어요?", "gyejwa sayonghasil bimilbeonho ne-jari ipryeokhaejusigesseoyo?");
INSERT INTO Phrase(phrase_text, phrase_text_kor, phrase_romanization) VALUES ("Do you want to make a savings account?", "적금 계좌 만드시겠어요?", "jukgeum gyejwa mandeusi gesseoyo?");
INSERT INTO Phrase(phrase_text, phrase_text_kor, phrase_romanization) VALUES ("Please write your name here", "여기에 성함 적어주세요", "Yeogie seongham jeokeojoosaeyo.");
INSERT INTO Phrase(phrase_text, phrase_text_kor, phrase_romanization) VALUES ("Can you sign here please?", "여기에 사인해주시겠어요?", "Yeogie ssainhaejushigesseoyo?");

INSERT INTO Phrase_Subcategory(phrase_id, subcategory_id) VALUES (1, 1);
INSERT INTO Phrase_Subcategory(phrase_id, subcategory_id) VALUES (2, 1);
INSERT INTO Phrase_Subcategory(phrase_id, subcategory_id) VALUES (3, 1);
INSERT INTO Phrase_Subcategory(phrase_id, subcategory_id) VALUES (4, 1);
INSERT INTO Phrase_Subcategory(phrase_id, subcategory_id) VALUES (5, 1);
INSERT INTO Phrase_Subcategory(phrase_id, subcategory_id) VALUES (6, 1);

INSERT INTO Keyword(keyword_text, keyword_text_kor, keyword_explanation, keyword_romanization) VALUES("Account", "계좌", "계좌 is the korean word for account", "gyejwa");
INSERT INTO Keyword(keyword_text, keyword_text_kor, keyword_explanation, keyword_romanization) VALUES("Checkings Account", "예금 계좌", "예금 계좌 indicates a checkings account", "yegeum gyejwa");
INSERT INTO Keyword(keyword_text, keyword_text_kor,  keyword_explanation, keyword_romanization) VALUES("Savings Account", "적금 계좌", "적금 계좌 indicates a savings account", "jukgeum gyejwa");
INSERT INTO Keyword(keyword_text, keyword_text_kor, keyword_explanation, keyword_romanization) VALUES("National Identification Card", "신분증", "신분증 indicates a national id card", "shin bun jjeung");
INSERT INTO Keyword(keyword_text, keyword_text_kor, keyword_explanation, keyword_romanization) VALUES("Password", "비밀번호",  "비밀번호 means password", "bimil bunho");
INSERT INTO Keyword(keyword_text, keyword_text_kor, keyword_explanation, keyword_romanization) VALUES("Name", "성함",  "성함 means Name", "Seongham");
INSERT INTO Keyword(keyword_text, keyword_text_kor, keyword_explanation, keyword_romanization) VALUES("Signature", "사인",  "사인 means signature", "ssain");

INSERT INTO Keyword_Phrase(keyword_id, phrase_id) VALUES (1, 1);
INSERT INTO Keyword_Phrase(keyword_id, phrase_id) VALUES (2, 1);
INSERT INTO Keyword_Phrase(keyword_id, phrase_id) VALUES (4, 2);
INSERT INTO Keyword_Phrase(keyword_id, phrase_id) VALUES (5, 3);
INSERT INTO Keyword_Phrase(keyword_id, phrase_id) VALUES (1, 4);
INSERT INTO Keyword_Phrase(keyword_id, phrase_id) VALUES (3, 4);
INSERT INTO Keyword_Phrase(keyword_id, phrase_id) VALUES (6, 5);
INSERT INTO Keyword_Phrase(keyword_id, phrase_id) VALUES (7, 6);

-- Phrases (Getting a Korean sim)
INSERT INTO Phrase(phrase_text, phrase_text_kor, phrase_romanization) VALUES ("Which data plan do you want to use?", "요금제 뭐로 하시겠어요?", "yogeumjae mworo hassigaesseoyo?");
INSERT INTO Phrase(phrase_text, phrase_text_kor, phrase_romanization) VALUES ("I would like to activate a phone number", "휴대폰 개통하고 싶어요", "hyudaepone gaetong hago shipeoyo");

INSERT INTO Phrase_Subcategory(phrase_id, subcategory_id) VALUES (2, 7);
INSERT INTO Phrase_Subcategory(phrase_id, subcategory_id) VALUES (5, 7);
INSERT INTO Phrase_Subcategory(phrase_id, subcategory_id) VALUES (6, 7);
INSERT INTO Phrase_Subcategory(phrase_id, subcategory_id) VALUES (7, 7);
INSERT INTO Phrase_Subcategory(phrase_id, subcategory_id) VALUES (8, 7);

INSERT INTO Keyword(keyword_text, keyword_text_kor, keyword_explanation, keyword_romanization) VALUES("Data plan", "요금제",  "요금제 means data plan", "yogeumjae");
INSERT INTO Keyword(keyword_text, keyword_text_kor, keyword_explanation, keyword_romanization) VALUES("To activate a phone number", "개통",  "개통 means to activate a phone number", "gaetong");

INSERT INTO Keyword_Phrase(keyword_id, phrase_id) VALUES (8, 7);
INSERT INTO Keyword_Phrase(keyword_id, phrase_id) VALUES (9, 8);

-- -- Quiz (Banking Specific)
INSERT INTO Quiz_Question(question_text, subcategory_id) VALUES("How do you say bank?", 1);
INSERT INTO Quiz_Question(question_text, subcategory_id) VALUES("How do you say bank account?", 1);
INSERT INTO Quiz_Question(question_text, subcategory_id) VALUES("How do you say bank book? ", 1);
INSERT INTO Quiz_Question(question_text, subcategory_id) VALUES("How do you say I want to make a bank account?", 1);
INSERT INTO Quiz_Question(question_text, subcategory_id) VALUES("How do you say identification (ID) card?", 1);

INSERT INTO Quiz_Answer(answer_text, explanation, is_correct) VALUES("은행", "은행 is the Korean word for bank", true);
INSERT INTO Quiz_Answer(answer_text, explanation, is_correct) VALUES("은행", "은행 is the Korean word for bank", false);
INSERT INTO Quiz_Answer(answer_text, explanation, is_correct) VALUES("계좌", "계좌 is the specific word for Bank account", true);
INSERT INTO Quiz_Answer(answer_text, explanation, is_correct) VALUES("계좌", "계좌 is the specific word for Bank account", false);
INSERT INTO Quiz_Answer(answer_text, explanation, is_correct) VALUES("통장", "통장 is the Korean word for bank book/ledger", true);
INSERT INTO Quiz_Answer(answer_text, explanation, is_correct) VALUES("통장", "통장 is the Korean word for bank book/ledger", false);
INSERT INTO Quiz_Answer(answer_text, explanation, is_correct) VALUES("예금 계좌 만들고싶어요", "This phrase indicates that you would like to create a normal checkings account", true);
INSERT INTO Quiz_Answer(answer_text, explanation, is_correct) VALUES("예금 계좌 만들고싶어요", "This phrase indicates that you would like to create a normal checkings account", false);
INSERT INTO Quiz_Answer(answer_text, explanation, is_correct) VALUES("신분증", "신분증 is the Korean word for ID", true);
INSERT INTO Quiz_Answer(answer_text, explanation, is_correct) VALUES("신분증", "신분증 is the Korean word for ID", false);

INSERT INTO Question_To_Answer(question_id, answer_id) VALUES(1, 1);
INSERT INTO Question_To_Answer(question_id, answer_id) VALUES(1, 4);
INSERT INTO Question_To_Answer(question_id, answer_id) VALUES(1, 6);
INSERT INTO Question_To_Answer(question_id, answer_id) VALUES(1, 8);
INSERT INTO Question_To_Answer(question_id, answer_id) VALUES(2, 2);
INSERT INTO Question_To_Answer(question_id, answer_id) VALUES(2, 3);
INSERT INTO Question_To_Answer(question_id, answer_id) VALUES(2, 6);
INSERT INTO Question_To_Answer(question_id, answer_id) VALUES(2, 8);
INSERT INTO Question_To_Answer(question_id, answer_id) VALUES(3, 2);
INSERT INTO Question_To_Answer(question_id, answer_id) VALUES(3, 4);
INSERT INTO Question_To_Answer(question_id, answer_id) VALUES(3, 5);
INSERT INTO Question_To_Answer(question_id, answer_id) VALUES(3, 8);
INSERT INTO Question_To_Answer(question_id, answer_id) VALUES(4, 2);
INSERT INTO Question_To_Answer(question_id, answer_id) VALUES(4, 4);
INSERT INTO Question_To_Answer(question_id, answer_id) VALUES(4, 6);
INSERT INTO Question_To_Answer(question_id, answer_id) VALUES(4, 7);
INSERT INTO Question_To_Answer(question_id, answer_id) VALUES(5, 9);
INSERT INTO Question_To_Answer(question_id, answer_id) VALUES(5, 2);
INSERT INTO Question_To_Answer(question_id, answer_id) VALUES(5, 4);
INSERT INTO Question_To_Answer(question_id, answer_id) VALUES(5, 6);

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

-- Document Helper (phone Specific)
INSERT INTO Document(document_title, document_title_kor, has_details) VALUES ("Copy of bank account", "통장 사본", false);

INSERT INTO Document_Subcategory(document_id, subcategory_id) VALUES(1, 7);
INSERT INTO Document_Subcategory(document_id, subcategory_id) VALUES(2, 7);
INSERT INTO Document_Subcategory(document_id, subcategory_id) VALUES(3, 7);

-- App Catalog 

INSERT INTO Tag(tag_title) VALUES("Transportation");
INSERT INTO Tag(tag_title) VALUES("Communication");
INSERT INTO Tag(tag_title) VALUES("Banking");
INSERT INTO Tag(tag_title) VALUES("Food");
INSERT INTO Tag(tag_title) VALUES("Shopping");
INSERT INTO Tag(tag_title) VALUES("Delivery");
INSERT INTO Tag(tag_title) VALUES("Translation");

INSERT INTO App(app_title, app_title_kor, app_text, app_image) VALUES("Naver Maps", '네이버 지도', "App 1 Text", "https://play-lh.googleusercontent.com/Cewes10AmAykxX9X18sMsyC4aFalv8jsyXigdfydFcgDVDnyzKsgbEtkQ5LhcCftBB1f=w240-h480-rw");
INSERT INTO App(app_title, app_title_kor, app_text, app_image) VALUES("Kakao Talk", "카카오톡", "App 2 Text", "https://play-lh.googleusercontent.com/KwGCiEolNEeR9Q4RFOnDtb8Pvqs3LNiQEdE07wMCnoULO3yLUprHbGGLBYNEt8k7WJY=w240-h480-rw");
INSERT INTO App(app_title, app_title_kor, app_text, app_image) VALUES("Kakao Maps", "카카오 맵", "App 3 Text", "https://play-lh.googleusercontent.com/DYeQ02AyIghsirp4ea3oEnyxT3X0GgTZrXYR8G7AN6tRr-9mFcQIJdCUub5VHiWKHA=w240-h480-rw");
INSERT INTO App(app_title, app_title_kor, app_text, app_image) VALUES("Toss", "토스", "App 4 Text", "https://play-lh.googleusercontent.com/W607uSRreW4h6Ar4reYPYCtYXID0_AIsd9m2fgWwdAN7JyZGG3WVM782wa5CfCvKZVM=w240-h480-rw");
INSERT INTO App(app_title, app_title_kor, app_text, app_image) VALUES("Coupang Eats", "쿠팡이츠", "App 5 Text", "https://play-lh.googleusercontent.com/VVxIA_jSqBzwzRSE9SXItUNLhT62QYdFNvCWT5msNIV_NXGJHi_C3GnyLvL14-niVQ=w240-h480-rw");
INSERT INTO App(app_title, app_title_kor, app_text, app_image) VALUES("Coupang", "쿠팡", "App 6 Text", "https://play-lh.googleusercontent.com/vQDaqflYMGXqN0NkPju5d_LZCdqRiqWw29S97A9quVzrqy2kBp2qnkeThnRCWBBKpVo=w240-h480-rw");
INSERT INTO App(app_title, app_title_kor, app_text, app_image) VALUES("Kakao T", "카카오 T", "App 7 Text", "https://play-lh.googleusercontent.com/mphI7NpqsF3eJ-DbwW_GeJA7nNe2oZ7_cjTomnDsO3RWhYbgTMWEhZhfTv49yiFyhQ=w240-h480-rw");
INSERT INTO App(app_title, app_title_kor, app_text, app_image) VALUES("Express Bus T-money", "고속버스 티머니", "App 8 Text", "https://play-lh.googleusercontent.com/763H-3dcJk80jKe9LCR2Vyzg_fPx4FeUPZFo-gCg0pYnq3-KkhGm_Mei7sgklNhruw=w240-h480-rw");
INSERT INTO App(app_title, app_title_kor, app_text, app_image) VALUES("Seoul Bike", "따릉이", "App 9 Text", "https://play-lh.googleusercontent.com/qxPKLrBi-zwgDqsYf9FtbrHuxbkT_VVS1thV6F5bDw-WJvFiD_9LvTz0VejNFtMnmnE=w240-h480-rw");
INSERT INTO App(app_title, app_title_kor, app_text, app_image) VALUES("Kakao Pay", "카카오 페이", "App 10 Text", "https://play-lh.googleusercontent.com/W43xj43ErMIs5BQgCdMKEa0NXCoUUW8DjQc5SxcDfLrC26H8sHDmoFIUWLYmsQahpo0=w240-h480-rw");
INSERT INTO App(app_title, app_title_kor, app_text, app_image) VALUES("Yogiyo", " 요기요", "App 11 Text", "https://play-lh.googleusercontent.com/Zkel_nNv9Hq8met65g2HkbCYMoR0tZR5TaWaV5ZMqsfdwY3naycvlUKkarBJOWNPjpo=w240-h480-rw");
INSERT INTO App(app_title, app_title_kor, app_text, app_image) VALUES("Subway Korea", "Subway Korea", "App 12 Text", "https://play-lh.googleusercontent.com/A6a1G2LkgJtlmAgQNiXVXVvXCYVCOJ-MSFZ-W2NijTAtGD3PiR5dpYYuHQBERB6-f80=w240-h480-rw");
INSERT INTO App(app_title, app_title_kor, app_text, app_image) VALUES("Papago", "파파고", "App 13 Text", "https://play-lh.googleusercontent.com/Df1ecVQZ_E_d9oetc4L2-iReDjo9xXfJAOiaNcljy7MdMtHwbyDsEGWq8uQsldkdnA=w240-h480-rw");


INSERT INTO App_Platform(app_id, platform_title, platform_store_link, platform_qr_code, has_english) VALUES (1, "Google", "https://play.google.com/store/apps/details?id=com.nhn.android.nmap&hl=en&gl=US", "https://chart.googleapis.com/chart?cht=qr&chl=https%3A%2F%2Fplay.google.com%2Fstore%2Fapps%2Fdetails%3Fid%3Dcom.nhn.android.nmap%26hl%3Den%26gl%3DUS&chs=180x180&choe=UTF-8&chld=L|2", true);
INSERT INTO App_Platform(app_id, platform_title, platform_store_link, platform_qr_code, has_english) VALUES (1, "Apple", "https://apps.apple.com/us/app/naver-map-navigation/id311867728", "https://chart.googleapis.com/chart?cht=qr&chl=https%3A%2F%2Fapps.apple.com%2Fus%2Fapp%2Fnaver-map-navigation%2Fid311867728&chs=180x180&choe=UTF-8&chld=L|2", true);
INSERT INTO App_Platform(app_id, platform_title, platform_store_link, platform_qr_code, has_english) VALUES (2, "Google", "https://play.google.com/store/apps/details?id=com.kakao.talk&hl=en&gl=US", "https://chart.googleapis.com/chart?cht=qr&chl=https%3A%2F%2Fplay.google.com%2Fstore%2Fapps%2Fdetails%3Fid%3Dcom.kakao.talk%26hl%3Den%26gl%3DUS&chs=180x180&choe=UTF-8&chld=L|2", true);
INSERT INTO App_Platform(app_id, platform_title, platform_store_link, platform_qr_code, has_english) VALUES (2, "Apple", "https://apps.apple.com/us/app/kakaotalk/id362057947", "https://chart.googleapis.com/chart?cht=qr&chl=https%3A%2F%2Fapps.apple.com%2Fus%2Fapp%2Fkakaotalk%2Fid362057947&chs=180x180&choe=UTF-8&chld=L|2", true);
INSERT INTO App_Platform(app_id, platform_title, platform_store_link, platform_qr_code, has_english) VALUES (3, "Google", "https://play.google.com/store/apps/details?id=net.daum.android.map&hl=en&gl=US", "https://chart.googleapis.com/chart?cht=qr&chl=https%3A%2F%2Fplay.google.com%2Fstore%2Fapps%2Fdetails%3Fid%3Dnet.daum.android.map%26hl%3Den%26gl%3DUS&chs=180x180&choe=UTF-8&chld=L|2", false);
INSERT INTO App_Platform(app_id, platform_title, platform_store_link, platform_qr_code, has_english) VALUES (3, "Apple", "https://apps.apple.com/us/app/kakaomap-korea-no-1-map/id304608425", "https://chart.googleapis.com/chart?cht=qr&chl=https%3A%2F%2Fapps.apple.com%2Fus%2Fapp%2Fkakaomap-korea-no-1-map%2Fid304608425&chs=180x180&choe=UTF-8&chld=L|2", false);
INSERT INTO App_Platform(app_id, platform_title, platform_store_link, platform_qr_code, has_english) VALUES (4, "Google", "https://play.google.com/store/apps/details?id=im.toss.arc&hl=en&gl=US", "https://chart.googleapis.com/chart?cht=qr&chl=https%3A%2F%2Fplay.google.com%2Fstore%2Fapps%2Fdetails%3Fid%3Dim.toss.arc%26hl%3Den%26gl%3DUS&chs=180x180&choe=UTF-8&chld=L|2", false);
INSERT INTO App_Platform(app_id, platform_title, platform_store_link, platform_qr_code, has_english) VALUES (4, "Apple", "https://apps.apple.com/kr/app/%ED%86%A0%EC%8A%A4/id839333328", "https://chart.googleapis.com/chart?cht=qr&chl=https%3A%2F%2Fapps.apple.com%2Fkr%2Fapp%2F%25ED%2586%25A0%25EC%258A%25A4%2Fid839333328&chs=180x180&choe=UTF-8&chld=L|2", false);
INSERT INTO App_Platform(app_id, platform_title, platform_store_link, platform_qr_code, has_english) VALUES (5, "Google", "https://play.google.com/store/apps/details?id=com.coupang.mobile.eats&hl=en&gl=US", "https://chart.googleapis.com/chart?cht=qr&chl=https%3A%2F%2Fplay.google.com%2Fstore%2Fapps%2Fdetails%3Fid%3Dcom.coupang.mobile.eats%26hl%3Den%26gl%3DUS&chs=180x180&choe=UTF-8&chld=L|2", true);
INSERT INTO App_Platform(app_id, platform_title, platform_store_link, platform_qr_code, has_english) VALUES (5, "Apple", "https://apps.apple.com/us/app/coupang-eats/id1445504255", "https://chart.googleapis.com/chart?cht=qr&chl=https%3A%2F%2Fapps.apple.com%2Fus%2Fapp%2Fcoupang-eats%2Fid1445504255&chs=180x180&choe=UTF-8&chld=L|2", true);
INSERT INTO App_Platform(app_id, platform_title, platform_store_link, platform_qr_code, has_english) VALUES (6, "Google", "https://play.google.com/store/apps/details?id=com.coupang.mobile&hl=en&gl=US", "https://chart.googleapis.com/chart?cht=qr&chl=https%3A%2F%2Fplay.google.com%2Fstore%2Fapps%2Fdetails%3Fid%3Dcom.coupang.mobile%26hl%3Den%26gl%3DUS&chs=180x180&choe=UTF-8&chld=L|", false);
INSERT INTO App_Platform(app_id, platform_title, platform_store_link, platform_qr_code, has_english) VALUES (6, "Apple", "https://apps.apple.com/us/app/%EC%BF%A0%ED%8C%A1-coupang/id454434967", "https://chart.googleapis.com/chart?cht=qr&chl=https%3A%2F%2Fapps.apple.com%2Fus%2Fapp%2F%25EC%25BF%25A0%25ED%258C%25A1-coupang%2Fid454434967&chs=180x180&choe=UTF-8&chld=L|2", false);
INSERT INTO App_Platform(app_id, platform_title, platform_store_link, platform_qr_code, has_english) VALUES (7, "Google", "https://play.google.com/store/apps/details?id=com.kakao.taxi&hl=en_US", "https://chart.googleapis.com/chart?cht=qr&chl=https%3A%2F%2Fplay.google.com%2Fstore%2Fapps%2Fdetails%3Fid%3Dcom.kakao.taxi%26hl%3Den_US&chs=180x180&choe=UTF-8&chld=L|2", true);
INSERT INTO App_Platform(app_id, platform_title, platform_store_link, platform_qr_code, has_english) VALUES (7, "Apple", "https://apps.apple.com/us/app/kakao-t/id981110422", "https://chart.googleapis.com/chart?cht=qr&chl=https%3A%2F%2Fapps.apple.com%2Fus%2Fapp%2Fkakao-t%2Fid981110422&chs=180x180&choe=UTF-8&chld=L|2", true);
INSERT INTO App_Platform(app_id, platform_title, platform_store_link, platform_qr_code, has_english) VALUES (8, "Google", "https://play.google.com/store/apps/details?id=com.kscc.scxb.mbl", "https://chart.googleapis.com/chart?cht=qr&chl=https%3A%2F%2Fplay.google.com%2Fstore%2Fapps%2Fdetails%3Fid%3Dcom.kscc.scxb.mbl&chs=180x180&choe=UTF-8&chld=L|", true);
INSERT INTO App_Platform(app_id, platform_title, platform_store_link, platform_qr_code, has_english) VALUES (8, "Apple", "https://apps.apple.com/us/app/%EA%B3%B5%EC%8B%9D-%EA%B3%A0%EC%86%8D%EB%B2%84%EC%8A%A4-%ED%8B%B0%EB%A8%B8%EB%8B%88/id957276809", "https://chart.googleapis.com/chart?cht=qr&chl=https%3A%2F%2Fapps.apple.com%2Fus%2Fapp%2F%25EA%25B3%25B5%25EC%258B%259D-%25EA%25B3%25A0%25EC%2586%258D%25EB%25B2%2584%25EC%258A%25A4-%25ED%258B%25B0%25EB%25A8%25B8%25EB%258B%2588%2Fid957276809&chs=180x180&choe=UTF-8&chld=L|2", true);
INSERT INTO App_Platform(app_id, platform_title, platform_store_link, platform_qr_code, has_english) VALUES (9, "Google", "https://play.google.com/store/apps/details?id=com.dki.spb_android", "https://chart.googleapis.com/chart?cht=qr&chl=https%3A%2F%2Fplay.google.com%2Fstore%2Fapps%2Fdetails%3Fid%3Dcom.dki.spb_android&chs=180x180&choe=UTF-8&chld=L|2e", true);
INSERT INTO App_Platform(app_id, platform_title, platform_store_link, platform_qr_code, has_english) VALUES (9, "Apple", "https://apps.apple.com/us/app/%EC%84%9C%EC%9A%B8%EC%9E%90%EC%A0%84%EA%B1%B0-%EB%94%B0%EB%A6%89%EC%9D%B4/id1037272004", "https://chart.googleapis.com/chart?cht=qr&chl=https%3A%2F%2Fapps.apple.com%2Fus%2Fapp%2F%25EC%2584%259C%25EC%259A%25B8%25EC%259E%2590%25EC%25A0%2584%25EA%25B1%25B0-%25EB%2594%25B0%25EB%25A6%2589%25EC%259D%25B4%2Fid1037272004&chs=180x180&choe=UTF-8&chld=L|2", true);
INSERT INTO App_Platform(app_id, platform_title, platform_store_link, platform_qr_code, has_english) VALUES (10, "Google", "https://play.google.com/store/search?q=kakao%20pay&c=apps", "https://chart.googleapis.com/chart?cht=qr&chl=https%3A%2F%2Fplay.google.com%2Fstore%2Fsearch%3Fq%3Dkakao%2520pay%26c%3Dapps&chs=180x180&choe=UTF-8&chld=L|2", true);
INSERT INTO App_Platform(app_id, platform_title, platform_store_link, platform_qr_code, has_english) VALUES (10, "Apple", "https://apps.apple.com/us/app/%EC%B9%B4%EC%B9%B4%EC%98%A4%ED%8E%98%EC%9D%B4/id1464496236", "https://chart.googleapis.com/chart?cht=qr&chl=https%3A%2F%2Fapps.apple.com%2Fus%2Fapp%2F%25EC%25B9%25B4%25EC%25B9%25B4%25EC%2598%25A4%25ED%258E%2598%25EC%259D%25B4%2Fid1464496236&chs=180x180&choe=UTF-8&chld=L|2", true);
INSERT INTO App_Platform(app_id, platform_title, platform_store_link, platform_qr_code, has_english) VALUES (11, "Google", "https://play.google.com/store/apps/details?id=com.fineapp.yogiyo&hl=en&gl=US", "https://chart.googleapis.com/chart?cht=qr&chl=https%3A%2F%2Fplay.google.com%2Fstore%2Fapps%2Fdetails%3Fid%3Dcom.fineapp.yogiyo%26hl%3Den%26gl%3DUS&chs=180x180&choe=UTF-8&chld=L|2", false);
INSERT INTO App_Platform(app_id, platform_title, platform_store_link, platform_qr_code, has_english) VALUES (11, "Apple", "https://apps.apple.com/us/app/%EB%B0%B0%EB%8B%AC%EC%9A%94%EA%B8%B0%EC%9A%94-%EA%B8%B0%EB%8B%A4%EB%A6%BC-%EC%97%86%EB%8A%94-%EB%A7%9B%EC%A7%91-%EB%B0%B0%EB%8B%AC%EC%95%B1/id543831532", "app 6 qr code", false);
INSERT INTO App_Platform(app_id, platform_title, platform_store_link, platform_qr_code, has_english) VALUES (12, "Google", "https://play.google.com/store/apps/details?id=com.imagedrome.jihachul&hl=en_US&gl=US", "https://chart.googleapis.com/chart?cht=qr&chl=https%3A%2F%2Fplay.google.com%2Fstore%2Fapps%2Fdetails%3Fid%3Dcom.imagedrome.jihachul%26hl%3Den_US%26gl%3DUS&chs=180x180&choe=UTF-8&chld=L|2", true);
INSERT INTO App_Platform(app_id, platform_title, platform_store_link, platform_qr_code, has_english) VALUES (12, "Apple", "https://apps.apple.com/us/app/subway-korea/id325924444", "https://chart.googleapis.com/chart?cht=qr&chl=https%3A%2F%2Fapps.apple.com%2Fus%2Fapp%2Fsubway-korea%2Fid325924444&chs=180x180&choe=UTF-8&chld=L|2", true);
INSERT INTO App_Platform(app_id, platform_title, platform_store_link, platform_qr_code, has_english) VALUES (13, "Google", "https://play.google.com/store/apps/details?id=com.naver.labs.translator&hl=en&gl=US", "https://chart.googleapis.com/chart?cht=qr&chl=https%3A%2F%2Fplay.google.com%2Fstore%2Fapps%2Fdetails%3Fid%3Dcom.naver.labs.translator%26hl%3Den%26gl%3DUS&chs=180x180&choe=UTF-8&chld=L|2", true);
INSERT INTO App_Platform(app_id, platform_title, platform_store_link, platform_qr_code, has_english) VALUES (13, "Apple", "https://apps.apple.com/us/app/naver-papago-ai-translator/id1147874819", "https://chart.googleapis.com/chart?cht=qr&chl=https%3A%2F%2Fapps.apple.com%2Fus%2Fapp%2Fnaver-papago-ai-translator%2Fid1147874819&chs=180x180&choe=UTF-8&chld=L|2", true);

INSERT INTO App_Tag(app_id, tag_id) VALUES (1, 1);
INSERT INTO App_Tag(app_id, tag_id) VALUES (2, 2);
INSERT INTO App_Tag(app_id, tag_id) VALUES (3, 1);
INSERT INTO App_Tag(app_id, tag_id) VALUES (4, 3);
INSERT INTO App_Tag(app_id, tag_id) VALUES (5, 4);
INSERT INTO App_Tag(app_id, tag_id) VALUES (5, 6);
INSERT INTO App_Tag(app_id, tag_id) VALUES (6, 5);
INSERT INTO App_Tag(app_id, tag_id) VALUES (6, 6);
INSERT INTO App_Tag(app_id, tag_id) VALUES (7, 1);
INSERT INTO App_Tag(app_id, tag_id) VALUES (8, 1);
INSERT INTO App_Tag(app_id, tag_id) VALUES (9, 1);
INSERT INTO App_Tag(app_id, tag_id) VALUES (10, 3);
INSERT INTO App_Tag(app_id, tag_id) VALUES (11, 4);
INSERT INTO App_Tag(app_id, tag_id) VALUES (11, 6);
INSERT INTO App_Tag(app_id, tag_id) VALUES (12, 1);
INSERT INTO App_Tag(app_id, tag_id) VALUES (13, 7);


INSERT INTO App_Info_Block(info_title, info_index, info_text, info_image, app_id) VALUES ("About Naver Maps", 1, "Naver maps is a map and navigator application for people who want to get around Korea. With its access to the Korean map data and English support, it makes navigating around Korean easier.", "image url", 1);
INSERT INTO App_Info_Block(info_title, info_index, info_text, info_image, app_id) VALUES ("How to find a location", 2, "Tap on the search bar at the top and search for your destination.", "image url", 1);

INSERT INTO App_Info_Block(info_title, info_index, info_text, info_image, app_id) VALUES ("About Kakao Talk", 1, "Kakao Talk is the most popular messaging service in Korea. It is an app that almost everyone uses, and is hence commonly used as the medium of communication.", "image url", 2);
INSERT INTO App_Info_Block(info_title, info_index, info_text, info_image, app_id) VALUES ("How to add a friend", 2, "Tap on the + button at the top and add.", "image url", 2);

INSERT INTO App_Info_Block(info_title, info_index, info_text, info_image, app_id) VALUES ("Info Title 1", 1, "text 1", "image 1", 3);
INSERT INTO App_Info_Block(info_title, info_index, info_text, info_image, app_id) VALUES ("Info Title 2", 2, "text 2", "image 2", 3);

INSERT INTO App_Images(app_id, img_src) VALUES (1, "https://play-lh.googleusercontent.com/fUUMRihnBK3CTedABW-l0cISECCYQ-Sr6dNiNZHKh0IpsXa4JhQb73J2M7TAkAS9Rm6Z=w2560-h1440");
INSERT INTO App_Images(app_id, img_src) VALUES (1, "https://play-lh.googleusercontent.com/Y9428Bntx6WUNp13qwHa8KsyPledfwDFwb0hwvuEAoHA7XKBaXU0KyA1fp4mRZ4Elo9-=w2560-h1440");
INSERT INTO App_Images(app_id, img_src) VALUES (1, "https://play-lh.googleusercontent.com/DU3B9doGaMwd86m4dAt5TY6YfDULsS-LC3BYZPnL4uvYMBwZs_xYmONZervmetSv2IU=w2560-h1440");
INSERT INTO App_Images(app_id, img_src) VALUES (1, "https://play-lh.googleusercontent.com/WxiTlp5FljxJ5vCjBUMnIosOpRsRvS3qwfxAHCaai1T482Hzbqf7D7wBwoPS-P7f6A=w2560-h1440");
INSERT INTO App_Images(app_id, img_src) VALUES (1, "https://play-lh.googleusercontent.com/SqsNlPuHTrnhLmQjM14pKCM_bnT-vUwCY16zNizx4ad0R1ok8vq3WjfHmopfs7Fno4M=w2560-h1440");
