CREATE TABLE "galleryItems" (
	"id" SERIAL PRIMARY KEY,
	"path" VARCHAR(255) NOT NULL,
	"description" VARCHAR(255) NOT NULL,
	"likes" INTEGER DEFAULT '0'
);

INSERT INTO "galleryItems" ("path", "description") 
VALUES('images/goat_small.jpg', 'Photo of a goat taken at Glacier National Park.'),
('images/1.jpg', '1994 Refugee Camp.'),
('images/2.jpg', '2016 Alcatraz.'),
('images/3.jpg', 'My brother small little dog.'),
('images/4.jpg', '2011 graduation with my sister.'),
('images/5.jpg', 'Food, food, and food.'),
('images/6.jpg', 'Niece is pondering what to do.'),
('images/7.jpg', 'Niece having a taste of lemon.'),
('images/8.jpg', 'Food, food, and more food.');
