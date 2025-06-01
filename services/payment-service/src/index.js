const express = require('express');
const app = express();
const port = process.env.PORT || 3002;

app.get('/', (req, res) => {
  res.send('Hello from Payment Service');
});

app.listen(port, () => {
  console.log(`Payment service running on port ${port}`);
});
