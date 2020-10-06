const express = require('express');
const router = express.Router();

var searchClient = require('./search.json')
var maClient = require('./data/maClients.js')


     router.get('/search-results-page', function (req, res, next) {
      res.locals.clients = searchClient
      next()
       })

       router.get('/*', function (req, res, next) {
         let findCustomer = {}
    
         for (let i = 0; i < maClient.length; i++ ) {
         if(maClient[i].reference === req.query.reference){
           findCustomer = maClient[i];
         }
     
         }

         res.locals.customer = findCustomer
          next()
           })



     




module.exports = router