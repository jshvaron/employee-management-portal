const express = require('express');
const mysql = require('mysql2');
const dotenv = require('dotenv');

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//connect to db
const db = mysql.createPool(
    {
        host: "127.0.0.1",//localhost did not work, why?
        user: "root",
        password: "root",
        database: "departments_db",
    },
    console.log('connected to database')
).promise()

//queries
const qryTest = db.query('SELECT * FROM departments')
console.log(qryTest)


app.listen(PORT, () => {
    console.log(`Server running on port http://localhost:${PORT}`);
  });



