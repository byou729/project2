DROP DATABASE IF EXISTS wine;
CREATE DATABASE wine;

use wine;
INSERT INTO wines (WBARCODEID, WNAME, WTYPE, WMAJORCAT)
VALUES (111111, "Yellow Tail", "Malbec", "Bold Red");

INSERT INTO wines (WBARCODEID, WNAME, WTYPE, WMAJORCAT)
VALUES (111111, "Yellow Tail", "Merlot", "Medium Red");

INSERT INTO wines (WBARCODEID, WNAME, WTYPE, WMAJORCAT)
VALUES (111111, "Yellow Tail", "Pinot Norir", "Light Red");

INSERT INTO wines (WBARCODEID, WNAME, WTYPE, WMAJORCAT)
VALUES (111111, "Yellow Tail", "Provencai Rose", "Rose");

INSERT INTO wines (WBARCODEID, WNAME, WTYPE, WMAJORCAT)
VALUES (111111, "Yellow Tail", "Chardonay", "Rich White");

INSERT INTO wines (WBARCODEID, WNAME, WTYPE, WMAJORCAT)
VALUES (111111, "Yellow Tail", "Sauvignon Blanc", "Light White");

INSERT INTO wines (WBARCODEID, WNAME, WTYPE, WMAJORCAT)
VALUES (111111, "Yellow Tail", "Champagne", "Sparking");

INSERT INTO wines (WBARCODEID, WNAME, WTYPE, WMAJORCAT)
VALUES (111111, "Yellow Tail", "Mocato", "Sweet White");

INSERT INTO wines (WBARCODEID, WNAME, FCAT, WTYPE, WMAJORCAT)
VALUES (111111, "Yellow Tail", "Port", "Desert");

INSERT INTO food (WBARCODEID, WNAME, FCAT, WTYPE, WMAJORCAT)
VALUES (111111, "Beef", "Red Meat", "Bold Red", "Medium Red");

INSERT INTO food (WBARCODEID, WNAME, FCAT, WTYPE, WMAJORCAT)
VALUES (111111, "Soft Cheese & Cream", "Diary", "Light Red", "Rich White");

INSERT INTO food (WBARCODEID, WNAME, FCAT, WTYPE, WMAJORCAT)
VALUES (111111, "Onion", "Vagetable", "Medium Red", "Light Red");

INSERT INTO food (WBARCODEID, WNAME, FCAT, WTYPE, WMAJORCAT)
VALUES (111111, "Chili", "Herbs & Spice", "Medium Red", "Rose");

INSERT INTO food (FBARCODEID, FNAME, FCAT, PERFECTPAIR, OKPAIR)
VALUES (111111, "Pasta", "Starch", "Light White", "Sweet White");

INSERT INTO food (FBARCODEID, FNAME, FCAT, PERFECTPAIR, OKPAIR)
VALUES (111111, "Strawberry", "Sweet", "Sweet White", "Sparkling");