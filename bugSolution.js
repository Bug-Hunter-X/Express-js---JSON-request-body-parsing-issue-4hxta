const express = require('express');
const app = express();
// Place express.json() middleware before route handlers
app.use(express.json());
app.post('/user', (req, res) => {
  console.log(req.body); // req.body is now correctly populated
  res.send('User registered');
});
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});