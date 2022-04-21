-- Data Population for Categories / Subcategories
INSERT INTO Category(category_name) VALUES("Banking");
INSERT INTO Category(category_name) VALUES("");
INSERT INTO Category(category_name) VALUES("Health Insurance");

-- Subcategory
INSERT INTO Subcategory(subcategory_name, category_id) VALUES("Creating a bank account", "0");



-- Document helper related
INSERT INTO Document(document_title, has_details, subcategory_id) VALUES("Alien Registration Card (ARC)", "Yes", "0");
INSERT INTO Document(document_title, has_details, subcategory_id) VALUES("Passport / ID", "No", "0");
INSERT INTO Document(document_title, has_details, subcategory_id) VALUES("Passport / ID", "No", "0");

