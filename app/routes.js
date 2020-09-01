const express = require('express');
const router = express.Router();

// Add your routes here - above the module.exports line


/*
  Clears session (triggered by little link at bottom of pages)
*/
router.get('/clearSession', function (req, res, next) {
  req.session.data.nuggets = []
  req.session.data.withdesc = false
  req.session.data.physexam = false
  req.session.data = {}
  nug_id = 0
  res.send('success')
})

router.get('*', function (req, res, next) {
  // path is only available with the proper value within this sub-module/router.
  res.locals.path = req.baseUrl.substr(1)
  // create some other useful path variables.
  var bits = req.params[0].substr(1).split('/')

  res.locals.path1 = res.locals.path + '/' + bits[0]
  res.locals.path2 = res.locals.path + '/' + bits[0] + '/' + bits[1]
  res.locals.stage = req.cookies.stage || 1
  res.locals.query = req.query


  for (property in req.session.data) {
    res.locals[property] = req.session.data[property]
  }

  next()
})

router.use('/', (req, res, next) => {
  res.locals.currentURL = req.originalUrl; //current screen
  res.locals.prevURL = req.get('Referrer'); // previous screen
console.log('previous page is: ' + res.locals.prevURL + " and current page is " + req.url + " " + res.locals.currentURL );
  next();
});


const radioButtonRedirect = require('radio-button-redirect')
router.use(radioButtonRedirect)

router.use('/advisor-v5', require('./views/advisor-v5/_routes'));
router.use('/advisor-v6', require('./views/advisor-v6/_routes'));
router.use('/creditor-v3', require('./views/creditor-v3/_routes'));
router.use('/creditor-v4', require('./views/creditor-v4/_routes'));

module.exports = router