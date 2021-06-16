'use strict';
const error500 = require('../error-handlers/500.js');

module.exports = (req, res, next) => {
  if (!req.query.name) {
    next(error500); // this will trigger our error handler
  } else{
    next(); 
  }
}
