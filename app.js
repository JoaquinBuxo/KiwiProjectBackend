const express = require('express');

const indexRouter = require('./routes/index');

const app = express();

app.use(express.json());

app.use('/', indexRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  return res.status(404).send();
});

module.exports = app;
