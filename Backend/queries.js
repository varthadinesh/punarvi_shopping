
const createDatabaseQuery = `CREATE DATABASE IF NOT EXISTS ${process.env.REACT_APP_DB_DATABASE}`;
const useDatabaseQuery = `USE ${process.env.REACT_APP_DB_DATABASE}`;

   const createRegisterTableQuery = `
CREATE TABLE IF NOT EXISTS register (
    user_id INT NOT NULL AUTO_INCREMENT,
    firstname VARCHAR(60) NOT NULL,
    lastname VARCHAR(60) NOT NULL,
    phone BIGINT(10) NOT NULL,
    email VARCHAR(60) NOT NULL,
    password VARCHAR(60) NOT NULL,
    UNIQUE INDEX user_id_UNIQUE (user_id ASC),
    UNIQUE INDEX phone_UNIQUE (phone ASC),
    UNIQUE INDEX email_UNIQUE (email ASC));
`;

const Womenproducts = `
CREATE TABLE IF NOT EXISTS women (
    id INT NOT NULL AUTO_INCREMENT,
    category VARCHAR(90) NOT NULL,
    name VARCHAR(90) NOT NULL,
    image VARCHAR(255) NOT NULL,
    description MEDIUMTEXT NOT NULL,
    location VARCHAR(45) NOT NULL,
    color VARCHAR(60) NOT NULL,
    alteration VARCHAR(45) NOT NULL,
    size VARCHAR(45) NOT NULL,
    measurements TINYTEXT NOT NULL,
    worn INT NOT NULL,
    price INT NOT NULL,
    UNIQUE INDEX id_UNIQUE (id ASC));
`
const kidproducts = `
CREATE TABLE IF NOT EXISTS kids (
id INT NOT NULL AUTO_INCREMENT,
category VARCHAR(90) NOT NULL,
name VARCHAR(90) NOT NULL,
image VARCHAR(255) NOT NULL,
description MEDIUMTEXT NOT NULL,
location VARCHAR(45) NOT NULL,
color VARCHAR(60) NOT NULL,
alteration VARCHAR(45) NOT NULL,
size VARCHAR(45) NOT NULL,
measurements TINYTEXT NOT NULL,
worn INT NOT NULL,
price INT NOT NULL,
UNIQUE INDEX id_UNIQUE (id ASC))
`
const jewelleryproducts = `
CREATE TABLE IF NOT EXISTS jewellery (
id INT NOT NULL AUTO_INCREMENT,
category VARCHAR(90) NOT NULL,
name VARCHAR(90) NOT NULL,
image VARCHAR(255) NOT NULL,
description MEDIUMTEXT NOT NULL,
location VARCHAR(45) NOT NULL,
color VARCHAR(60) NOT NULL,
alteration VARCHAR(45) NOT NULL,
size VARCHAR(45) NOT NULL,
measurements TINYTEXT NOT NULL,
worn INT NOT NULL,
price INT NOT NULL,
UNIQUE INDEX id_UNIQUE (id ASC))
`
const booksproducts = `
CREATE TABLE IF NOT EXISTS books (
id INT NOT NULL AUTO_INCREMENT,
category VARCHAR(90) NOT NULL,
name VARCHAR(90) NOT NULL,
image VARCHAR(255) NOT NULL,
description MEDIUMTEXT NOT NULL,
location VARCHAR(45) NOT NULL,
color VARCHAR(60) NOT NULL,
alteration VARCHAR(45) NOT NULL,
size VARCHAR(45) NOT NULL,
measurements TINYTEXT NOT NULL,
worn INT NOT NULL,
price INT NOT NULL,
UNIQUE INDEX id_UNIQUE (id ASC))
`
   module.exports = {
    createRegisterTableQuery,
    createDatabaseQuery,
    useDatabaseQuery,
    Womenproducts,
    kidproducts,
    jewelleryproducts,
    booksproducts
   }