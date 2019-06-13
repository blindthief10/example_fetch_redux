const express = require('express');
const app = express();

app.listen(4000, () => console.log('Server is up and running'));

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.get('/example', (req, res, next) => {
  res.status(200).json({message: 'This was brought from Express'})
  console.log('res');
})

app.use((err, req, res, next) => {
  err.status = err.status || 500;
  res.status(err.status).json({errMessage: 'This is an error message'})
})
