const express = require('express');
const cors = require('cors');


const app = express();
app.use(cors());
const port = 5500;

app.get('/', (req, res) => {
  res.json({ message: "Hello from backend!" });
});

app.listen(port, () => {
  console.log(`Backend running at http://localhost:${port}`);
});
