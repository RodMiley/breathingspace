const express = require('express');
const router = express.Router();

// Add your routes here - above the module.exports line
var dapcases = require('./data/dapcases.js')


  
 
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