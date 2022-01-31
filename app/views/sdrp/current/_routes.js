const express = require('express');
const router = express.Router();

// Add your routes here - above the module.exports line
var dapcases = require('./data/dapcases.js')
var creditorcases = require('./data/creditorcases.json')

 
router.get('/*', function (req, res, next) {
  let findCase = {}

  for (let i = 0; i < creditorcases.length; i++ ) {
  if(creditorcases[i].reference === req.query.reference){
    findCase = creditorcases[i];
  }

  }

  res.locals.creditorcase = findCase
  res.locals.creditorcases = creditorcases
   next()
    })


    router.get('/creditor/confirm-debt-details', function (req, res, next) {
      let findCase = {}

      for (let i = 0; i < creditorcases.length; i++ ) {
        if(creditorcases[i].reference === req.query.reference){
          findCase = creditorcases[i];
        }
      
        }
      

      let status = req.session.data['tasktodo']
      if(status === 'completed'){
        findCase.task ='completedUpdatedDebt'
      }
     
      res.locals.creditorcase = findCase
      res.locals.creditorcases = creditorcases
      next()
       })


    router.get('/creditor/sold-debt-confirm', function (req, res, next) {
      let findCase = {}

      for (let i = 0; i < creditorcases.length; i++ ) {
        if(creditorcases[i].reference === req.query.reference){
          findCase = creditorcases[i];
        }
      
        }
      

      let status = req.session.data['tasktodo']
      if(status === 'completed'){
        findCase.task ='completedSoldDebt'
      }
     
      res.locals.creditorcase = findCase
      res.locals.creditorcases = creditorcases
      next()
       })

    


       router.get('/creditor/resettasks', function (req, res, next) {

        let findCase = {}
        let findCase2 = {}

        for (let i = 0; i < creditorcases.length; i++ ) {
        if(creditorcases[i].task === 'completedUpdatedDebt'){
          findCase = creditorcases[i];
        }
        if(creditorcases[i].task === 'completedSoldDebt'){
          findCase2 = creditorcases[i];
        }
        }
    
  
        let status = req.session.data['resettask']
        if(status === 'Yes'){
          findCase.task ='Yes'
          findCase2.task ="Yes"
          }   
       
        res.locals.creditorcases = findCase
        next()
         })  


  
 
router.get('/*', function (req, res, next) {
    let findCase = {}

    for (let i = 0; i < dapcases.length; i++ ) {
    if(dapcases[i].reference === req.query.reference){
      findCase = dapcases[i];
    }

    }

    res.locals.case = findCase
    res.locals.cases = dapcases
     next()
      })







      module.exports = router      