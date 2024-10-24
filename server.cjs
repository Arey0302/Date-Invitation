// server.cjs
const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root', 
    password: 'Thuy16032022*',
    database: 'Date',
    port: 3306
});

db.connect(err => {
    if (err) {
        console.error('Could not connect to MySQL:', err);
        return;
    }
    console.log('Connected to MySQL');
});

app.post('/save-date-time', (req, res) => {
    const { date, time, food } = req.body;

    const sql = 'INSERT INTO user_data (date, time, food) VALUES (?, ?, ?)';
    db.query(sql, [date, time, food], (err, result) => {
        if (err) {
            console.error('Error saving data:', err);
            return res.status(500).send('Error saving data');
        }
        res.status(200).send('Data saved successfully');
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
