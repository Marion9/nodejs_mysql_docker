const express = require('express');
const mysql = require("mysql");

const app = express();

// Constants
const PORT = 5000;
const HOST = '0.0.0.0';

// Create a connection to the database
const connection = mysql.createConnection({
    host: "localhost",
    user: "marion",
    password: "123",
    port: "5000",
    debug: false
  });
  

app.get('/hello', (req, res) => {
    res.send('Hello World');
});

app.get('/connect', function (req, res) {
    connection.connect(error => {
        if (error) throw error;
        console.log("Successfully connected to the database.");
        var sql = `
        CREATE TABLE IF NOT EXISTS hello (
        id INT PRIMARY KEY,
        number INT NOT NULL);`;
        connection.query(sql, (req,result) => {
            if (error) throw error;
            result.send('create table')
        });
        var sql1 = `
        INSERT INTO hello VALUES (1)`;
        connection.query(sql1, (req,result) => {
            if (error) throw error;
            result.send('insert row')
        });
        var sql2 = `
        INSERT INTO hello VALUES (2)`;
        connection.query(sql2, (req,result) => {
            if (error) throw error;
            result.send('insert row')
        });
    });
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
