const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
const port = 5500;

// Simple message route
app.get('/', (req, res) => {
  res.json({ message: "Hello from backend!" });
});

// New route to get a list of users (example)
app.get('/users', (req, res) => {
  const users = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' },
    { id: 3, name: 'Samuel Johnson' }
  ];
  res.json(users);
});

// New route to handle a POST request (example)
app.post('/submit', express.json(), (req, res) => {
  const { name, email } = req.body;
  res.json({ message: `Received data for ${name} with email: ${email}` });
});

app.listen(port, () => {
  console.log(`Backend running at http://localhost:${port}`);
});
