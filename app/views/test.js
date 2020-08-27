const express = require('express')
const router = express.Router()





router.post('/creditor-v1/choice',function (req, res) {
      
    var scenariopicker = req.session.data['accept']


    if(scenariopicker   == "yes"){
      res.redirect('/creditor-v1/confirmation')
    }
 
    else {
      res.redirect('/creditor-v1/not-accepted')
    }
  
  }) 



  var searchClient = require('./data/search.json')
  router.get('/advisor-v5/search-results-page', function (req, res, next) {
  res.locals.clients = searchClient
  next()
   })

   router.get('/advisor-v6/search-results-page', function (req, res, next) {
    res.locals.clients = searchClient
    next()
     })

   router.get('/advisor-v5/search-results-pagev2', function (req, res, next) {
    res.locals.clients = searchClient
    next()
     })





const radioButtonRedirect = require('radio-button-redirect')
router.use(radioButtonRedirect)


module.exports = router
