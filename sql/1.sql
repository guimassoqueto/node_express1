CREATE DATABASE NODEJS;

USE NODEJS;

CREATE TABLE tblProducts (
	id CHAR(7) UNIQUE NOT NULL,
	title NVARCHAR(100) NOT NULL,
	[image] VARCHAR(250) NOT NULL,
	price SMALLMONEY NOT NULL,
	description NVARCHAR(MAX) NOT NULL
)

-- constraints
ALTER TABLE tblProducts
ADD available INT NOT NULL CHECK(available > 0);

ALTER TABLE tblProducts 
ADD CONSTRAINT price_over_zero CHECK(price > 0);

ALTER TABLE tblProducts 
ADD CONSTRAINT id_size_seven CHECK(LEN(TRIM(id)) = 7);