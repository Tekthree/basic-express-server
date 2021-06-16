'use strict';

module.exports = (req,res,next) => {
  let username = req.query.name;
  let User = {
    name: username
  }
  req.user = User;
  next();
};
