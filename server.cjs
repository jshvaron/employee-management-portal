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
const qryTest = async () => {
const [rows, fields] = await db.query('SELECT * FROM departments' );
return rows;
} 

// view all dpt qry

// add dpts qry

//view all roles qry

// add role qry

// update emp role qry

// view all emp qry

// add emp qry


//export qrys
module.exports = qryTest;