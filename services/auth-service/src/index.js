const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello from Auth Service');
});

app.listen(port, () => {
  console.log(`Auth service running on port ${port}`);
});