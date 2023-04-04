DROP DATABASE IF EXISTS departments_db;
CREATE DATABASE departments_db;

USE departments_db;

CREATE TABLE departments(
    department_name VARCHAR(40) NOT NULL,
    id INT NOT NULL,
);

CREATE TABLE roles(
    job_title VARCHAR(30),
    role_id INT NOT NULL,
    department_id INT NOT NULL,
    salary INT NOT NULL
);

CREATE TABLE employees(
    employee_id INT NOT NULL,
    first_name VARCHAR(25),
    last_name VARCHAR(25),
    job_title VARCHAR(30),
    department VARCHAR(50),
    manager VARCHAR(50)

);


