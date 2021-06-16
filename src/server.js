'use strict';

const express = require('express');
const logger = require('./middleware/logger');
const validator = require('./middleware/validator.js');
const getUser = require('./middleware/getUser.js');
const error404 = require('./error-handlers/404.js');
const error500 = require('./error-handlers/500.js')
const app = express();

app.use(logger);
app.use(validator);

app.get('/person', getUser, (req, res) => {
  res.send(req.user);
});

app.use('*', error404);
app.use(error500);

module.exports = app;