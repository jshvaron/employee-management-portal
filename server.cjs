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
//queries


// view all dpt qry
const qryDpts = async () => {
    const [viewDpts, fields] = await db.query('SELECT * FROM departments' );
    return viewDpts;
    } 
// add dpts qry

//view all roles qry
const qryRoles = async () => {
    const [viewRoles, fields] = await db.query('SELECT * FROM roles;' );
    return viewRoles;
    } 
// add role qry

// update emp role qry

// view all emp qry
const qryEmployees = async () => {
    const [viewEmployees, fields] = await db.query('SELECT * FROM employees;' );
    return viewEmployees;
    } 
// add emp qry


//export qrys
module.exports ={
    qryDpts,
    qryRoles,
    qryEmployees
} 
