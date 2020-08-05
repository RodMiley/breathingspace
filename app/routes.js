const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line


/*
  Clears session (triggered by little link at bottom of pages)
*/
router.get('/clearSession', function (req, res, next) {
    req.session.data.nuggets = []
    req.session.data.withdesc = false
    req.session.data.physexam = false
    req.session.data = {}
    observations = []
    req.session.data.socialWorkComments = []
    req.session.data.typicalDayComments = []
    req.session.data.observedBehaviourComments = []
    req.session.data.conditionComments = []
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

   router.get('/advisor-v5/search-results-pagev2', function (req, res, next) {
    res.locals.clients = searchClient
    next()
     })


  var creditordebts = require('./data/creditordebtlist.js')


router.get('/creditor-v3/homepage', function (req, res, next) {
res.locals.debts = creditordebts
next()
 })

 


   router.get('/creditor-v4/homepage', function (req, res, next) {
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

  router.get('/creditor-v4/homepage', function (req, res, next) {
    
    res.locals.customers = creditordebts
    // Status
    res.locals.cusNew = creditordebts
    .filter(customer => customer.status === 'new')

    res.locals.cusApplied = creditordebts
    .filter(customer => customer.status === 'applied')

    res.locals.cusReview = creditordebts
    .filter(customer => customer.status === 'review')

    res.locals.cusAccepted = creditordebts
    .filter(customer => customer.status === 'review-accepted')

    res.locals.cusRejected = creditordebts
    .filter(customer => customer.status === 'review-rejected')
    // Type
    res.locals.cusHB = creditordebts
    .filter(customer => customer.type === 'Housing benefit')

    res.locals.cusCT = creditordebts
    .filter(customer => customer.type === 'Council tax')

    res.locals.cusPF = creditordebts
    .filter(customer => customer.type === 'Parking fines')

    res.locals.cusRA = creditordebts
    .filter(customer => customer.type === 'Rent arrears')

    res.locals.cusOther = creditordebts
    .filter(customer => customer.type === 'Other')

    //Todo

    res.locals.cusToDo = creditordebts
    .filter(customer => customer.todo === 'Yes')

    // Type + todo 

    res.locals.cusHBToDo = creditordebts
    .filter( customer => customer.type === 'Housing benefit' & customer.todo === 'Yes')

    res.locals.cusCTToDo = creditordebts
    .filter( customer => customer.type === 'Council tax' & customer.todo === 'Yes')
    
    res.locals.cusPFToDo = creditordebts
    .filter( customer => customer.type === 'Parking fines' & customer.todo === 'Yes')
    
    res.locals.cusRAToDo = creditordebts
    .filter( customer => customer.type === 'Rent arrears' & customer.todo === 'Yes')
    
    res.locals.cusOtherToDo = creditordebts
    .filter( customer => customer.type === 'Other' & customer.todo === 'Yes')

    // Status + todo

    res.locals.cusNewToDo = creditordebts
    .filter(customer => customer.status === 'new' & customer.todo === 'Yes')

    res.locals.cusAppliedToDo = creditordebts
    .filter(customer => customer.status === 'applied' & customer.todo === 'Yes')
    
    res.locals.cusReviewToDo = creditordebts
    .filter(customer => customer.status === 'review' & customer.todo === 'Yes')
    
    res.locals.cusAcceptedToDo = creditordebts
    .filter(customer => customer.status === 'review-accepted' & customer.todo === 'Yes')
    
    res.locals.cusRejectedToDo = creditordebts
    .filter(customer => customer.status === 'review-rejected' & customer.todo === 'Yes')

       // type + status
       res.locals.cusHBNew = creditordebts
       .filter(customer => customer.status === 'new' & customer.type === 'Housing benefit')
  
       res.locals.cusCTNew = creditordebts
       .filter(customer => customer.status === 'new' & customer.type === 'Council tax')
  
       res.locals.cusPFNew = creditordebts
       .filter(customer => customer.status === 'new' & customer.type === 'Parking fines')
  
       res.locals.cusRANew = creditordebts
       .filter(customer => customer.status === 'new' & customer.type === 'Rent arrears')
  
       res.locals.cusOtherNew = creditordebts
       .filter(customer => customer.status === 'new' & customer.type === 'Other')

       res.locals.cusHBApplied = creditordebts
       .filter(customer => customer.status === 'applied' & customer.type === 'Housing benefit')
  
       res.locals.cusCTApplied = creditordebts
       .filter(customer => customer.status === 'applied' & customer.type === 'Council tax')
  
       res.locals.cusPFApplied = creditordebts
       .filter(customer => customer.status === 'applied' & customer.type === 'Parking fines')
  
       res.locals.cusRAApplied = creditordebts
       .filter(customer => customer.status === 'applied' & customer.type === 'Rent arrears')
  
       res.locals.cusOtherApplied = creditordebts
       .filter(customer => customer.status === 'applied' & customer.type === 'Other')

       res.locals.cusHBReview = creditordebts
       .filter(customer => customer.status === 'review' & customer.type === 'Housing benefit')
  
       res.locals.cusCTReview = creditordebts
       .filter(customer => customer.status === 'review' & customer.type === 'Council tax')
  
       res.locals.cusPFReview = creditordebts
       .filter(customer => customer.status === 'review' & customer.type === 'Parking fines')
  
       res.locals.cusRAReview = creditordebts
       .filter(customer => customer.status === 'review' & customer.type === 'Rent arrears')
  
       res.locals.cusOtherReview = creditordebts
       .filter(customer => customer.status === 'review' & customer.type === 'Other')

       res.locals.cusHBAccepted = creditordebts
       .filter(customer => customer.status === 'review-accepted' & customer.type === 'Housing benefit')
  
       res.locals.cusCTAccepted = creditordebts
       .filter(customer => customer.status === 'review-accepted' & customer.type === 'Council tax')
  
       res.locals.cusPFAccepted = creditordebts
       .filter(customer => customer.status === 'review-accepted' & customer.type === 'Parking fines')
  
       res.locals.cusRAAccepted = creditordebts
       .filter(customer => customer.status === 'review-accepted' & customer.type === 'Rent arrears')
  
       res.locals.cusOtherAccepted = creditordebts
       .filter(customer => customer.status === 'review-accepted' & customer.type === 'Other')

       res.locals.cusHBRejected = creditordebts
       .filter(customer => customer.status === 'review-rejected' & customer.type === 'Housing benefit')
  
       res.locals.cusCTRejected = creditordebts
       .filter(customer => customer.status === 'review-rejected' & customer.type === 'Council tax')
  
       res.locals.cusPFRejected = creditordebts
       .filter(customer => customer.status === 'review-rejected' & customer.type === 'Parking fines')
  
       res.locals.cusRARejected = creditordebts
       .filter(customer => customer.status === 'review-rejected' & customer.type === 'Rent arrears')
  
       res.locals.cusOtherRejected = creditordebts
       .filter(customer => customer.status === 'review-rejected' & customer.type === 'Other')

  
   // type + status + todo
      res.locals.cusHBNewToDo = creditordebts
      .filter(customer => customer.status === 'new' & customer.type === 'Housing benefit' & customer.todo ==='Yes')

      res.locals.cusHBAcceptedToDo = creditordebts
      .filter(customer => customer.status === 'review-accepted' & customer.type === 'Housing benefit' & customer.todo ==='Yes')

      res.locals.cusHBRejectedToDo = creditordebts
      .filter(customer => customer.status === 'review-rejected' & customer.type === 'Housing benefit' & customer.todo ==='Yes')
  

    res.locals.cusCTNewToDo = creditordebts
    .filter(customer => customer.status === 'new' & customer.type === 'Council tax' & customer.todo ==='Yes')

    res.locals.cusCTAcceptedToDo = creditordebts
    .filter(customer => customer.status === 'review-accepted' & customer.type === 'Council tax' & customer.todo ==='Yes')

    res.locals.cusCTRejectedToDo = creditordebts
    .filter(customer => customer.status === 'review-rejected' & customer.type === 'Council tax' & customer.todo ==='Yes')
  next()
    })


 router.get('/creditor-v3/account-landing-tabs', function (req, res, next) {
  let findCustomer = {}

  for (let i = 0; i < creditordebts.length; i++ ) {
  if(creditordebts[i].reference === req.query.reference){
    findCustomer = creditordebts[i];
   }
  }
 
  res.locals.debt = findCustomer
  next()
   })

   router.get('/creditor-v3/protections-confirm', function (req, res, next) {
    let findCustomer = {}
  
    for (let i = 0; i < creditordebts.length; i++ ) {
    if(creditordebts[i].reference === req.query.reference){
      findCustomer = creditordebts[i];
     }
    }
   
    res.locals.debt = findCustomer
    next()
     })
  


router.post('/creditor-v3/account-landing-tabs', function (req, res, next) {

console.log('parma', req.body);

const path = 'account-landing-tabs?reference=' + req.body.reference
    
 res.redirect(301, `account-landing-tabs?reference=${req.body.reference}`)
 });




const radioButtonRedirect = require('radio-button-redirect')
router.use(radioButtonRedirect)




module.exports = router
