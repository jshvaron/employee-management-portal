DROP DATABASE IF EXISTS superStore_db;
CREATE DATABASE superStore_db;

USE superStore_db;

CREATE TABLE departments (
    id INT AUTO_INCREMENT PRIMARY KEY,
    dpt_name VARCHAR(30) NOT NULL
);

CREATE TABLE roles (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30) NOT NULL,
    salary INT NOT NULL,
    department_id INT,
    FOREIGN KEY (department_id)
    REFERENCES departments(id) ON DELETE SET NULL
);

CREATE TABLE employees (
    id INT  AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT,
    manager_id INT NULL,
    FOREIGN KEY (role_id)
    REFERENCES roles(id) ON DELETE SET NULL,
    FOREIGN KEY (manager_id)
    REFERENCES employees(id)
    ON DELETE SET NULL
);


