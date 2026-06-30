-- Database: aws_database

-- DROP DATABASE IF EXISTS aws_database;

CREATE DATABASE aws_database
WITH
OWNER = postgres
ENCODING = 'UTF8'
CONNECTION LIMIT = -1;



-- Table: public.capitals

-- DROP TABLE IF EXISTS public.capitals;

CREATE TABLE capitals (
id integer NOT NULL,
country character varying(45),
capital character varying(45),
PRIMARY KEY (id)
);


\copy capitals(id, country, capital)
FROM '/home/ec2-user/capitals.csv'
DELIMITER ','
CSV HEADER;


SELECT * FROM capitals;