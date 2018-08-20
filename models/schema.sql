DROP DATABASE IF EXISTS wine;
CREATE DATABASE wines_db;

use wine_db;
CREATE TABLE wines(
    id INTEGER , 
    wbarcodeId INTEGER NOT NULL,
    wname VARCHAR, 
    wtype VARCHAR,
    wmajorcat VARCHAR 
);
INSERT INTO wines (wbarcodeId, wname, wtype, wmajorcat)
VALUES (111111, "Yellow Tail", "Malbec", "Bold Red");

INSERT INTO wines (wbarcodeId, wname, wtype, wmajorcat)
VALUES (111111, "Yellow Tail", "Merlot", "Medium Red");

INSERT INTO wines (wbarcodeId, wname, wtype, wmajorcat)
VALUES (111111, "Yellow Tail", "Pinot Norir", "Light Red");

INSERT INTO wines (wbarcodeId, wname, wtype, wmajorcat)
VALUES (111111, "Yellow Tail", "Provencai Rose", "Rose");

INSERT INTO wines (wbarcodeId, wname, wtype, wmajorcat)
VALUES (111111, "Yellow Tail", "Chardonay", "Rich White");

INSERT INTO wines (wbarcodeId, wname, wtype, wmajorcat)
VALUES (111111, "Yellow Tail", "Sauvignon Blanc", "Light White");

INSERT INTO wines (wbarcodeId, wname, wtype, wmajorcat)
VALUES (111111, "Yellow Tail", "Champagne", "Sparking");

INSERT INTO wines (wbarcodeId, wname, wtype, wmajorcat)
VALUES (111111, "Yellow Tail", "Mocato", "Sweet White");

INSERT INTO wines (wbarcodeId, wname, wtype, wmajorcat)
VALUES (111111, "Yellow Tail", "Port", "Desert");

CREATE TABLE food (
  fbarcodeId INTEGER NOT NULL,
    food_name VARCHAR,
    food_category VARCHAR, 
    perfect_Pair VARCHAR,
    ok_Pair VARCHAR
)

INSERT INTO food (fbarcodeId, food_name, food_category, perfectpair, okpair)
VALUES (111111, "Beef", "Red Meat", "Bold Red", "Medium Red");

INSERT INTO food (fbarcodeId, food_name, food_category, perfectpair, okpair)
VALUES (111111, "Soft Cheese & Cream", "Diary", "Light Red", "Rich White");

INSERT INTO food (fbarcodeId, food_name, food_category, perfectpair, okpair)
VALUES (111111, "Onion", "Vagetable", "Medium Red", "Light Red");

INSERT INTO food (fbarcodeId, food_name, food_category, perfectpair, okpair)
VALUES (111111, "Chili", "Herbs & Spice", "Medium Red", "Rose");

INSERT INTO food (fbarcodeId, food_name, food_category, perfectpair, okpair)
VALUES (111111, "Pasta", "Starch", "Light White", "Sweet White");

INSERT INTO food (fbarcodeId, food_name, food_category, perfectpair, okpair)
VALUES (111111, "Strawberry", "Sweet", "Sweet White", "Sparkling");