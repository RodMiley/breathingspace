const express = require('express');
const router = express.Router();

var searchClient = require('./search.json')

     router.get('/search-results-page', function (req, res, next) {
      res.locals.clients = searchClient
      next()
       })
  


module.exports = router