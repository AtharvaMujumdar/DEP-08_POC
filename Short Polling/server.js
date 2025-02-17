const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors()); 

let data = {
  message: 'Hello, World!',
};

app.get('/data', (req, res) => {
  
  data.message = `Updated message at ${new Date().toLocaleTimeString()}`;
  res.json(data);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

