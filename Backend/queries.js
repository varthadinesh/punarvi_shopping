
const createDatabaseQuery = `CREATE DATABASE IF NOT EXISTS ${process.env.REACT_APP_DB_DATABASE}`;
const useDatabaseQuery = `USE ${process.env.REACT_APP_DB_DATABASE}`;
const highendcouture = `
CREATE TABLE IF NOT EXISTS highendcouture (
    hec_id INT NOT NULL AUTO_INCREMENT,
    hec_name VARCHAR(90) NOT NULL,
    hec_image VARCHAR(255) NOT NULL,
    hec_description MEDIUMTEXT NOT NULL,
    hec_location VARCHAR(45) NOT NULL,
    hec_color VARCHAR(60) NOT NULL,
    hec_alteration VARCHAR(45) NOT NULL,
    hec_size VARCHAR(45) NOT NULL,
    hec_measurements TINYTEXT NOT NULL,
    hec_worn INT NOT NULL,
    hec_price INT NOT NULL,
    UNIQUE INDEX hec_id_UNIQUE (hec_id ASC));
`
const books = `
CREATE TABLE IF NOT EXISTS books (
    books_id INT NOT NULL AUTO_INCREMENT,
    books_name VARCHAR(90) NOT NULL,
    books_image VARCHAR(255) NOT NULL,
    books_description MEDIUMTEXT NOT NULL,
    books_location VARCHAR(45) NOT NULL,
    books_color VARCHAR(60) NOT NULL,
    books_alteration VARCHAR(45) NOT NULL,
    books_size VARCHAR(45) NOT NULL,
    books_measurements TINYTEXT NOT NULL,
    books_worn INT NOT NULL,
    books_price INT NOT NULL,
    UNIQUE INDEX books_id_UNIQUE (books_id ASC));
`
  const jewelry = `
  CREATE TABLE IF NOT EXISTS jewelry (
    jewelry_id INT NOT NULL AUTO_INCREMENT,
    jewelry_name VARCHAR(90) NOT NULL,
    jewelry_image VARCHAR(255) NOT NULL,
    jewelry_description MEDIUMTEXT NOT NULL,
    jewelry_location VARCHAR(45) NOT NULL,
    jewelry_color VARCHAR(60) NOT NULL,
    jewelry_alteration VARCHAR(45) NOT NULL,
    jewelry_size VARCHAR(45) NOT NULL,
    jewelry_measurements TINYTEXT NOT NULL,
    jewelry_worn INT NOT NULL,
    jewelry_price INT NOT NULL,
    UNIQUE INDEX jewelry_id_UNIQUE (jewelry_id ASC));
  `
  const  boykids = `
  CREATE TABLE IF NOT EXISTS boykids (
    boykids_id INT NOT NULL AUTO_INCREMENT,
    boykids_name VARCHAR(90) NOT NULL,
    boykids_image VARCHAR(255) NOT NULL,
    boykids_description MEDIUMTEXT NOT NULL,
    boykids_location VARCHAR(45) NOT NULL,
    boykids_color VARCHAR(60) NOT NULL,
    boykids_alteration VARCHAR(45) NOT NULL,
    boykids_size VARCHAR(45) NOT NULL,
    boykids_measurements TINYTEXT NOT NULL,
    boykids_worn INT NOT NULL,
    boykids_price INT NOT NULL,
    UNIQUE INDEX boykids_id_UNIQUE (boykids_id ASC));
  
  `
  const girlkids = `
  CREATE TABLE  IF NOT EXISTS  girlkids (
    girlkids_id INT NOT NULL AUTO_INCREMENT,
    girlkids_name VARCHAR(90) NOT NULL,
    girlkids_image VARCHAR(255) NOT NULL,
    girlkids_description MEDIUMTEXT NOT NULL,
    girlkids_location VARCHAR(45) NOT NULL,
    girlkids_color VARCHAR(60) NOT NULL,
    girlkids_alteration VARCHAR(45) NOT NULL,
    girlkids_size VARCHAR(45) NOT NULL,
    girlkids_measurements TINYTEXT NOT NULL,
    girlkids_worn INT NOT NULL,
    girlkids_price INT NOT NULL,
    UNIQUE INDEX girlkids_id_UNIQUE (girlkids_id ASC));
  
  
  `
  
  const twinnings = `
  CREATE TABLE  IF NOT EXISTS  twinnings (
    twinnings_id INT NOT NULL AUTO_INCREMENT,
    twinnings_name VARCHAR(90) NOT NULL,
    twinnings_image VARCHAR(255) NOT NULL,
    twinnings_description MEDIUMTEXT NOT NULL,
    twinnings_location VARCHAR(45) NOT NULL,
    twinnings_color VARCHAR(60) NOT NULL,
    twinnings_alteration VARCHAR(45) NOT NULL,
    twinnings_size VARCHAR(45) NOT NULL,
    twinnings_measurements TINYTEXT NOT NULL,
    twinnings_worn INT NOT NULL,
    twinnings_price INT NOT NULL,
    UNIQUE INDEX twinnings_id_UNIQUE (twinnings_id ASC));
  
  
  `
  const dresses = `
  CREATE TABLE  IF NOT EXISTS  dresses (
    dresses_id INT NOT NULL AUTO_INCREMENT,
    dresses_name VARCHAR(90) NOT NULL,
    dresses_image VARCHAR(255) NOT NULL,
    dresses_description MEDIUMTEXT NOT NULL,
    dresses_location VARCHAR(45) NOT NULL,
    dresses_color VARCHAR(60) NOT NULL,
    dresses_alteration VARCHAR(45) NOT NULL,
    dresses_size VARCHAR(45) NOT NULL,
    dresses_measurements TINYTEXT NOT NULL,
    dresses_worn INT NOT NULL,
    dresses_price INT NOT NULL,
    UNIQUE INDEX dresses_id_UNIQUE (dresses_id ASC));
  
  `
  const lehenga = `
  CREATE TABLE  IF NOT EXISTS  lehenga (
    lehenga_id INT NOT NULL AUTO_INCREMENT,
    lehenga_name VARCHAR(90) NOT NULL,
    lehenga_image VARCHAR(255) NOT NULL,
    lehenga_description MEDIUMTEXT NOT NULL,
    lehenga_location VARCHAR(45) NOT NULL,
    lehenga_color VARCHAR(60) NOT NULL,
    lehenga_alteration VARCHAR(45) NOT NULL,
    lehenga_size VARCHAR(45) NOT NULL,
    lehenga_measurements TINYTEXT NOT NULL,
    lehenga_worn INT NOT NULL,
    lehenga_price INT NOT NULL,
    UNIQUE INDEX lehenga_id_UNIQUE (lehenga_id ASC));
  `
  const  sarees = `
  CREATE TABLE  IF NOT EXISTS  sarees (
    saree_id INT NOT NULL AUTO_INCREMENT,
    saree_name VARCHAR(90) NOT NULL,
    saree_image VARCHAR(255) NOT NULL,
    saree_description MEDIUMTEXT NOT NULL,
    saree_location VARCHAR(45) NOT NULL,
    saree_color VARCHAR(60) NOT NULL,
    saree_alteration VARCHAR(45) NOT NULL,
    saree_size VARCHAR(45) NOT NULL,
    saree_measurements TINYTEXT NOT NULL,
    saree_worn INT NOT NULL,
    saree_price INT NOT NULL,
    UNIQUE INDEX saree_id_UNIQUE (saree_id ASC));
   `
   module.exports = {
    createDatabaseQuery,
    useDatabaseQuery,
    highendcouture,
    books,
    jewelry,
    boykids,
    girlkids,
    twinnings,
    dresses,
    lehenga,
    sarees
   }