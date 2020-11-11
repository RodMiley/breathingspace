var express = require('express');
var router = express.Router();



var creditordebts = require('./creditordebtlist.js')


    router.get('/homepage', function (req, res, next) {
      res.locals.creditorNumbers = {
        total: creditordebts.length,
  
        //status
        new: creditordebts.filter(customer => customer.status === 'new').length,
        applied: creditordebts.filter(customer => customer.status === 'applied').length,
        review: creditordebts.filter(customer => customer.status === 'review').length,
        reviewaccepted: creditordebts.filter(customer => customer.status === 'review-accepted').length,
        reviewrejected: creditordebts.filter(customer => customer.status === 'review-rejected').length,
    
        // debttype
        HB: creditordebts.filter(customer => customer.type === 'Housing benefit').length,
        CT: creditordebts.filter(customer => customer.type === 'Council tax').length,
        PF: creditordebts.filter(customer => customer.type === 'Parking fines').length,
        RA: creditordebts.filter(customer => customer.type === 'Rent arrears').length,
        Other: creditordebts.filter(customer => customer.type === 'Other').length,
  
        todo: creditordebts.filter(customer => customer.todo === 'Yes').length,
      }
      next()
    }) 
  
module.exports = router