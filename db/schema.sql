CREATE DATABASE burger_db;
USE burger_db;

CREATE TABLE Burgers(
    id int AUTO_INCREMENT NOT NULL,
    burgerName VARCHAR(50) not null,
    devoured TINYINT(1) DEFAULT 0,
    PRIMARY KEY (id)
);