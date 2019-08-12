const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 4000;

app.use(express.static('dist'));
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'dist/index.html'));
});

app.listen(port, () => {
  console.log(`Your app is being served on port ${port}`);
});
