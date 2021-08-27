'use strict';

module.exports = (error, req, res, next) => {
  res.status(500).send(`internal server error, at ${req.path}`, error)
}