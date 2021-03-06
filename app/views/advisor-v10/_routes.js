const express = require('express');
const router = express.Router();

var searchClient = require('./search.json')


     router.get('/*', function (req, res, next) {
      res.locals.clients = searchClient
      next()
       })
           router.get('/*', function (req, res, next) {
            let findCustomer = {}
       
            for (let i = 0; i < searchClient.length; i++ ) {
            if(searchClient[i].reference === req.query.reference){
              findCustomer = searchClient[i];
            }
        
            }
   
            res.locals.client = findCustomer
             next()
              })


              router.get('/_debts', function (req, res, next) {
                let findCustomer = {}

                for (let i = 0; i < searchClient.length; i++ ) {
                  if(searchClient[i].reference === req.query.reference){
                    findCustomer = searchClient[i];
                  }
                }
               
                res.locals.client = findCustomer
                next()
                 })            




// Proposed debt change task status ---------------------------------------------/
              router.get('/proposed-debt-confirm', function (req, res, next) {
                let findCustomer = {}

                for (let i = 0; i < searchClient.length; i++ ) {
                  if(searchClient[i].reference === req.query.reference){
                    findCustomer = searchClient[i];
                  }
                }
          
          
                let status = req.session.data['debtStatus']
                if(status === 'proposedDebt'){
                  findCustomer.task ='proposedComplete' 
                  }   
               
                res.locals.client = findCustomer
                next()
                 })



// Transfer debt(sold) change task status ---------------------------------------------/
router.get('/sold-debt-confirm', function (req, res, next) {
  let findCustomer = {}

  for (let i = 0; i < searchClient.length; i++ ) {
    if(searchClient[i].reference === req.query.reference){
      findCustomer = searchClient[i];
    }
  }


  let status = req.session.data['debtStatus']
  if(status === 'transferDebt'){
    findCustomer.task ='transferComplete' 
    }   
 
  res.locals.client = findCustomer
  next()
   })




// Transfer client change task status ---------------------------------------------/
router.get('/transfer-request-confirm', function (req, res, next) {
  let findCustomer = {}

  for (let i = 0; i < searchClient.length; i++ ) {
    if(searchClient[i].reference === req.query.reference){
      findCustomer = searchClient[i];
    }
  }


  let status = req.session.data['debtStatus']
  if(status === 'transferClient'){
    findCustomer.task ='transferClientComplete' 
    }   
 
  res.locals.client = findCustomer
  next()
   })



 // Review debt change task status ---------------------------------------------/
 router.get('/eligibility-review-yes', function (req, res, next) {
  let findCustomer = {}

  for (let i = 0; i < searchClient.length; i++ ) {
    if(searchClient[i].reference === req.query.reference){
      findCustomer = searchClient[i];
    }
  }


  let status = req.session.data['debtStatus']
  if(status === 'debtreview'){
    findCustomer.task ='debtReviewComplete' 
    }   
 
  res.locals.client = findCustomer
  next()
   })   
   
   router.get('/eligibility-review-no', function (req, res, next) {
    let findCustomer = {}
  
    for (let i = 0; i < searchClient.length; i++ ) {
      if(searchClient[i].reference === req.query.reference){
        findCustomer = searchClient[i];
      }
    }
  
  
    let status = req.session.data['debtStatus']
    if(status === 'debtreview'){
      findCustomer.task ='debtReviewComplete' 
      }   
   
    res.locals.client = findCustomer
    next()
     })    
     
     

 
 // Review clientchange task status ---------------------------------------------/
 router.get('/endbreathingspace-confirm', function (req, res, next) {
  let findCustomer = {}

  for (let i = 0; i < searchClient.length; i++ ) {
    if(searchClient[i].reference === req.query.reference){
      findCustomer = searchClient[i];
    }
  }


  let status = req.session.data['debtStatus']
  if(status === 'clientreview'){
    findCustomer.status ='clientReviewComplete' 
    }   
 
  res.locals.client = findCustomer
  next()
   })     
   
   router.get('/endbreathingspace-no', function (req, res, next) {
    let findCustomer = {}
  
    for (let i = 0; i < searchClient.length; i++ ) {
      if(searchClient[i].reference === req.query.reference){
        findCustomer = searchClient[i];
      }
    }
  
  
    let status = req.session.data['debtStatus']
    if(status === 'clientreview'){
      findCustomer.task ='clientReviewComplete' 
      }   
   
    res.locals.client = findCustomer
    next()
     })    



// -------------------------------- Reset client data


   router.get('/resetClientData', function (req, res, next) {
    res.locals.client = searchClient

    let findCustomer = {}
    let findCustomer2 = {}
    let findCustomer3 = {}
    let findCustomer4 = {}
    let findCustomer5 = {}
     
    for (let i = 0; i < searchClient.length; i++ ) {

    if(searchClient[i].task === 'proposedComplete'){
      findCustomer = searchClient[i];
     }
     if(searchClient[i].task === 'debtReviewComplete'){
      findCustomer2 = searchClient[i];
     }

     if(searchClient[i].task === 'clientReviewComplete'){
      findCustomer3 = searchClient[i];
     }

     if(searchClient[i].task === 'transferComplete'){
      findCustomer4 = searchClient[i];
     }

     if(searchClient[i].task === 'transferClientComplete'){
      findCustomer5 = searchClient[i];
     }
    }
    

    let status = req.session.data['debtReset']
      if(status === 'yes'){
        findCustomer.task ='proposeddebt' 
      }  

      if(status === 'yes'){
        findCustomer2.task ='debtreview' 
      }  

      if(status === 'yes'){
        findCustomer3.task ='clientreview'
      }  

      if(status === 'yes'){
        findCustomer4.task ='transferdebt'
      }  

      if(status === 'yes'){
        findCustomer5.task ='transferclient'
      }  
    
    next()
  })

     




module.exports = router