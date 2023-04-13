const mysql = require('mysql2');
const express = require('express');
const app = express();

//connect to db
const db = mysql.createPool(
    {
        host: "127.0.0.1",//localhost did not work, why?
        user: "root",
        password: "root",
        database: "superStore_db",
    },
    console.log('connected to database')
).promise()
// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());





    // QUERIES BEGIN
// view all dpt qry
const qryDpts = async () => {
    const [viewDpts, fields] = await db.query('SELECT * FROM departments' );
    return viewDpts;
    };
// add dpts qry
const addDepartment = async (departmentName) => {
    const [newDpt, fields] = await db.query('INSERT INTO departments (dpt_name) VALUES (?)', [departmentName]);
    return newDpt;
  };
//view all roles qry
const qryRoles = async () => {
    const [viewRoles, fields] = await db.query('SELECT * FROM roles;' );
    return viewRoles;
    } 
// add role qry
const addRole = async (title, salary, department_id) => {
    const [newRole, fields] = await db.query(
        'INSERT INTO roles (title, salary, department_id) VALUES (?, ?, ?)',
        [title, salary, department_id]
    );
    return newRole;
};
// add role needs a dpt to be associated with
const qrySelectDpt = async () => {
    const [selectDpt, fields] = await db.query('SELECT * FROM departments');
    return selectDpt;
}


// update emp role qry

// view all emp qry
const qryEmployees = async () => {
    const [viewEmployees, fields] = await db.query('SELECT * FROM employees;' );
    return viewEmployees;
    } 
// add emp qry
const addEmployee = async (firstName, lastName, roleId, managerId) => {
    const [newRole, fields] = await db.query(
        'INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)',
        [firstName, lastName, roleId, managerId]
    );
    return newRole;
};

const qrySelectRole = async () => {
    const [selectRole, fields] = await db.query('SELECT * from roles');
    return selectRole;
}

const qrySelectManager = async () => {
    const [selectManager, fields] = await db.query('SELECT id, first_name, last_name FROM employees WHERE manager_id IS NULL'
    );
    return selectManager;
}

//export qrys
module.exports ={
    qryDpts,
    qryRoles,
    qryEmployees,
    qrySelectDpt,
    qrySelectRole,
    qrySelectManager,
    addDepartment,
    addRole,
    addEmployee,
    
} 

// SELECT id, first_name, last_name FROM employees WHERE manager_id IS NULL - populated undefined
// SELECT * FROM employees - populated id
// SELECT CONCAT(id, first_name, last_name) FROM employees - populated undefined


