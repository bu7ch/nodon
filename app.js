const express = require('express');
const mongoose = require('mongoose')

mongoose
  .connect('mongodb://localhost/books', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log(`[MONGODB is connected !!]`))
  .catch((err) => console.log(Error, err.message));

const app = express();

app.use('/', (req, res) => {
  res.send('Bonjour');
})

app.listen(4000, () => console.log('ON est bon !!'));