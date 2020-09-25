const express = require('express');
const router = express.Router();

var searchClient = require('./search.json')
var maClient = require('./data/maClients.js')


     router.get('/search-results-page', function (req, res, next) {
      res.locals.clients = searchClient
      next()
       })

       router.get('/account-page-active', function (req, res, next) {
          res.locals.customers = maClient
          next()
           })
         
   




module.exports = router