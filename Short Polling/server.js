const express = require('express');
const app = express();
const port = 3000;

let data = {
  message: 'Hello, World!',
};

app.get('/data', (req, res) => {
  // Simulate data update
  data.message = `Updated message at ${new Date().toLocaleTimeString()}`;
  res.json(data);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
