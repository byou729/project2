DROP DATABASE IF EXISTS wines_db;
CREATE DATABASE wines_db;

use wines_db;
CREATE TABLE wines (
    wtype VARCHAR (50),
    wmajorcat VARCHAR (50)
);
INSERT INTO wines (wtype, wmajorcat)
VALUES ("Malbec", "RED");

INSERT INTO wines (wtype, wmajorcat)
VALUES ("Syrah/Shiraz", "RED");

INSERT INTO wines (wtype, wmajorcat)
VALUES ("Cabarnet Sauvignon", "RED");

INSERT INTO wines (wtype, wmajorcat)
VALUES ("Bordeaux Blend", "RED");

INSERT INTO wines (wtype, wmajorcat)
VALUES ("Merlot", "RED");

INSERT INTO wines (wtype, wmajorcat)
VALUES ("Zinfandel", "RED");

INSERT INTO wines (wtype, wmajorcat)
VALUES ("Pinot Norir", "RED");

INSERT INTO wines (wtype, wmajorcat)
VALUES ("Gamay", "RED");

INSERT INTO wines (wtype, wmajorcat)
VALUES ("All Roses", "ROSE");

INSERT INTO wines (wtype, wmajorcat)
VALUES ("Chardonay", "LIGHT WHITE");

INSERT INTO wines (wtype, wmajorcat)
VALUES ("Sauvignon Blanc", "LIGHT WHITE");

INSERT INTO wines (wtype, wmajorcat)
VALUES ("Pinot Blanc", "LIGHT WHITE");

INSERT INTO wines (wtype, wmajorcat)
VALUES ("Pinot Gris", "LIGHT WHITE");

INSERT INTO wines (wtype, wmajorcat)
VALUES ("Champagne", "SPARKLING");

INSERT INTO wines (wtype, wmajorcat)
VALUES ("Prosecco", "SPARKLING");

INSERT INTO wines (wtype, wmajorcat)
VALUES ("Sparkling Rose", "SPARKLING");

INSERT INTO wines (wtype, wmajorcat)
VALUES ("Moscato", "SWEET WHITE/DESSERT");

INSERT INTO wines (wtype, wmajorcat)
VALUES ("Riesling", "SWEET WHITE/DESSERT");

INSERT INTO wines (wtype, wmajorcat)
VALUES ("Port", "SWEET WHITE/DESSERT");

INSERT INTO wines (wtype, wmajorcat)
VALUES ("Sherry", "SWEET WHITE/DESSERT");

INSERT INTO wines (wtype, wmajorcat)
VALUES ("Maderia", "SWEET WHITE/DESSERT");

INSERT INTO wines (wtype, wmajorcat)
VALUES ("Muscat", "SWEET WHITE/DESSERT");

CREATE TABLE food (
    food_name VARCHAR(50),
    food_category VARCHAR(50), 
    perfectPair VARCHAR(50)
);


INSERT INTO food (food_name, food_category, perfectPair)
VALUES ("Red Meat(beef/lamb)", "MEAT", "Bold Red");

INSERT INTO food (food_name, food_category, perfectPair)
VALUES ("Cured Meat(bacon/salami)", "MEAT", "Bold Red");

INSERT INTO food (food_name, food_category, perfectPair)
VALUES ("Pork(roast/tenderloin/chop)", "MEAT", "Bold Red");

INSERT INTO food (food_name, food_category, perfectPair)
VALUES ("Poultry(chicken/duck/turkey)", "MEAT", "Bold Red");

INSERT INTO food (food_name, food_category, perfectPair)
VALUES ("Mollusk(oyster/mussel/clam)", "MEAT", "Bold Red");

INSERT INTO food (food_name, food_category, perfectPair)
VALUES ("Fish(tuna/cod/trout/bass)", "MEAT", "Bold Red");

INSERT INTO food (food_name, food_category, perfectPair)
VALUES ("Lobster & Shellfish(prawn/crab)", "MEAT", "Bold Red");

INSERT INTO food (food_name, food_category, perfectPair)
VALUES ("Soft Cheese", "DIARY", "Light Red");

INSERT INTO food (food_name, food_category, perfectPair)
VALUES ("Hard Cheese", "DIARY", "Light Red");

INSERT INTO food (food_name, food_category, perfectPair)
VALUES ("Green Vegetables(lettuce/kale)", "VEGETABLE", "Medium Red");

INSERT INTO food (food_name, food_category, perfectPair)
VALUES ("Root Vegetables(pumpkin/carrot)", "VEGETABLE", "Medium Red");

INSERT INTO food (food_name, food_category, perfectPair)
VALUES ("Nightshades(tomato/eggplant)", "VEGETABLE", "Medium Red");

INSERT INTO food (food_name, food_category, perfectPair)
VALUES ("Nuts & Seeds", "VEGETABLE", "Medium Red");

INSERT INTO food (food_name, food_category, perfectPair)
VALUES ("Fruit & Berries(strawberry/orange/apple)", "SWEET", "Sweet White");

INSERT INTO food (food_name, food_category, perfectPair)
VALUES ("Vanilla & Caramel(creme brulee/ice cream)", "SWEET", "Sweet White");

INSERT INTO food (food_name, food_category, perfectPair)
VALUES ("Chocolate & Coffee", "SWEET", "Sweet White");