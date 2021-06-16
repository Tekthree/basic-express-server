'use strict';

module.exports = (req, res, next) => {
  if (!req.query) {
    // res.status(403).send({'Error': 'No auth provided'});
    next({'Error': 'no name provided'}); // this will trigger our error handler
  } else{
    next(); // passing anything into the next function its considered an error.
  }
}
