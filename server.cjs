const express = require('express');
const cors = require('cors'); 
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json()); 

// Route to path
app.get('/', (req, res) => {
  res.send('Welcome to the server!');
});

// Route to save data
app.post('/save-date-time', (req, res) => {
  const { date, time, food } = req.body;

  const dataToSave = `Date: ${date}, Time: ${time}, Food: ${food}\n`;
  fs.appendFile(path.join(__dirname, 'data.txt'), dataToSave, (err) => {
    if (err) {
      console.error('Error saving data:', err);
      return res.status(500).send('Error saving data.');
    }
    res.send('Data saved successfully!');
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
