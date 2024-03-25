const express = require('express');
const mysql = require('mysql');

const app = express();
const PORT = process.env.PORT || 3001;

const connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'Siva@123',
    database: 'sample_db' 
});

connection.connect((err) => {
    if (err) {
        console.error('Failed to connect to MySQL database');
        throw err;
    }
    console.log('Connected to MySQL database');
});

app.get('/', (req, res) => {
    connection.query('SELECT * FROM  example_table', (error, results, fields) => {
        if (error) {
            console.error('Error executing MySQL query:', error);
            res.status(500).send('Internal Server Error');
            return;
        }
        res.json(results);
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
