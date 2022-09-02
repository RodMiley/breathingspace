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
  res.locals.path3 = res.locals.path + '/' + bits[0] + '/' + bits[2]
  //res.locals.stage = req.cookies.stage || 1
  res.locals.query = req.query


  for (property in req.session.data) {
    res.locals[property] = req.session.data[property]
  }

  next()
})

// GET SPRINT NAME - useful for relative templates
router.use('/', (req, res, next) => {
  res.locals.currentURL = req.originalUrl; //current screen
  res.locals.prevURL = req.get('Referrer'); // previous screen
  req.folder = req.originalUrl.split('/')[1]; //folder, e.g. 'current'
  req.subfolder = req.originalUrl.split('/')[2]; //sub-folder e.g. 'service'
  res.locals.folder = req.folder; // what folder the url is
  res.locals.subfolder = req.subfolder; // what subfolder the URL is in
console.log('folder : ' + res.locals.folder + ', subfolder : ' + res.locals.subfolder  );
  console.log('previous page is: ' + res.locals.prevURL + " and current page is " + req.url + " " + res.locals.currentURL );
  next();
});

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
router.use('/advisor-v10', require('./views/advisor-v10/_routes'));
router.use('/advisor-v11', require('./views/advisor-v11/_routes'));
router.use('/advisor-v12', require('./views/advisor-v12/_routes'));
router.use('/advisor-v13', require('./views/advisor-v13/_routes'));
router.use('/advisor-latest', require('./views/advisor-latest/_routes'));
router.use('/creditor-v3', require('./views/creditor-v3/_routes'));
router.use('/creditor-v4', require('./views/creditor-v4/_routes'));
router.use('/creditor-v5', require('./views/creditor-v5/_routes'));
router.use('/creditor-v6', require('./views/creditor-v6/_routes'));
router.use('/creditor-latest', require('./views/creditor-latest/_routes'));
router.use('/sdrp/alphademo', require('./views/sdrp/alphademo/_routes'));
router.use('/sdrp/V8', require('./views/sdrp/V8/_routes'));
router.use('/sdrp/V7', require('./views/sdrp/V7/_routes'));
router.use('/sdrp/V6', require('./views/sdrp/V6/_routes'));
router.use('/sdrp/V5', require('./views/sdrp/V5/_routes'));
router.use('/sdrp/V4', require('./views/sdrp/V4/_routes'));
router.use('/sdrp/V3', require('./views/sdrp/V3/_routes'));
router.use('/sdrp/v2', require('./views/sdrp/v2/_routes'));
router.use('/sdrp/current', require('./views/sdrp/current/_routes'));

module.exports = router