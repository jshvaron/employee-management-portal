const express = require('express');
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
const app = express;

//Express mid ware
app.request(express.urlencoded({ extended: false}));
app.use(express.json());