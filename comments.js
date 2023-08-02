// Create a web server

// Step 1: Import express
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// Step 2: Create an instance of express
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// Step 3: Create a route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.post('/', (req, res) => {
  res.send(req.body);
});

// Step 4: Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});