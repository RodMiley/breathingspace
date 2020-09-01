var express = require('express');
var router = express.Router();



var creditordebts = require('./creditordebtlist.js')


 router.get('/homepage-card', function (req, res, next) {
  res.locals.customers = creditordebts
  next()
  })

  router.get('/debttype-landing-page', function (req, res, next) {
    res.locals.customers = creditordebts

    next()
    })


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
  
  
  
  
   router.get('/account-landing-tabs', function (req, res, next) {
    let findCustomer = {}
  
    for (let i = 0; i < creditordebts.length; i++ ) {
    if(creditordebts[i].reference === req.query.reference){
      findCustomer = creditordebts[i];
     }
    }
   
    res.locals.customer = findCustomer
    next()
     })
  
     router.get('/protections-apply', function (req, res, next)
      {
      let findCustomer = {}
    
      for (let i = 0; i < creditordebts.length; i++ ) {
      if(creditordebts[i].reference === req.query.reference){
        findCustomer = creditordebts[i];
       }
      }
  
  
  
      res.locals.customer = findCustomer
      next()
       })
  
  
     router.get('/protections-confirm', function (req, res, next)
     {
     let findCustomer = {}
   
     for (let i = 0; i < creditordebts.length; i++ ) {
     if(creditordebts[i].reference === req.query.reference){
       findCustomer = creditordebts[i];
      }
     }
  
     let status = req.session.data['debtStatus']
     if(status === 'applied'){
       findCustomer.status ='applied' 
       findCustomer.todo='No'
       findCustomer.substatus='Yes'
      
      }
  
     res.locals.customer = findCustomer
     next()
      })

   
      router.get('/review-debt-details', function (req, res, next)
      {
      let findCustomer = {}
    
      for (let i = 0; i < creditordebts.length; i++ ) {
      if(creditordebts[i].reference === req.query.reference){
        findCustomer = creditordebts[i];
       }
      }
     
      res.locals.customer = findCustomer
      next()
       })

    // ---------------------------------------------------------

     router.get('/review-completed-confirm', function (req, res, next)
     {
     let findCustomer = {}
   
     for (let i = 0; i < creditordebts.length; i++ ) {
     if(creditordebts[i].reference === req.query.reference){
       findCustomer = creditordebts[i];
      }
     }
  
     let status = req.session.data['debtStatus']
   //  if(status === 'reviewapplied'){
   //    findCustomer.todo='No'}
   //  if(status === 'dispute'){
   //   findCustomer.status ='dispute' 
   //     findCustomer.todo='No'} 
    if(status === 'completed'){
      findCustomer.todo='No'}    
  
    
     res.locals.customer = findCustomer
     next()
      })

     // ---------------------------------------------------------


     router.get('/review-completed-rejected-confirm', function (req, res, next)
     {
     let findCustomer = {}
   
     for (let i = 0; i < creditordebts.length; i++ ) {
     if(creditordebts[i].reference === req.query.reference){
       findCustomer = creditordebts[i];
      }
     }
  
     let status = req.session.data['debtStatus']
   if(status === 'reviewapplied'){
   findCustomer.todo='No'}
   if(status === 'dispute'){
      findCustomer.status ='dispute' 
      findCustomer.todo='No'} 

     res.locals.customer = findCustomer
     next()
      })

     // ---------------------------------------------------------
  
      router.get('/review-debt', function (req, res, next)
      {
      let findCustomer = {}
    
      for (let i = 0; i < creditordebts.length; i++ ) {
      if(creditordebts[i].reference === req.query.reference){
        findCustomer = creditordebts[i];
       }
      }
     
      res.locals.customer = findCustomer
      next()
       })

    // ---------------------------------------------------------
  
       router.get('/review-debt-confirm', function (req, res, next)
       {
       let findCustomer = {}
     
       for (let i = 0; i < creditordebts.length; i++ ) {
       if(creditordebts[i].reference === req.query.reference){
         findCustomer = creditordebts[i];
        }
       }
  
       let status = req.session.data['debtStatus']
         if(status === 'review'){
           findCustomer.status ='review' 
           findCustomer.todo='No'}  
      
       res.locals.customer = findCustomer
       next()
        })
  
  
      // ---------------------------------------------------------
  
     router.get('/protections-confirm', function (req, res, next) {
      let findCustomer = {}
    
      for (let i = 0; i < creditordebts.length; i++ ) {
      if(creditordebts[i].reference === req.query.reference){
        findCustomer = creditordebts[i];
       }
      }
     
      res.locals.customer = findCustomer
      next()
       })
   
         // ---------------------------------------------------------
  
       router.get('/sold-the-debt', function (req, res, next) {
        let findCustomer = {}
      
        for (let i = 0; i < creditordebts.length; i++ ) {
        if(creditordebts[i].reference === req.query.reference){
          findCustomer = creditordebts[i];
         }
        }
       
        res.locals.customer = findCustomer
        next()
         })
  
           // ---------------------------------------------------------
  
       router.get('/sold-the-debt-details', function (req, res, next) {
        let findCustomer = {}
      
        for (let i = 0; i < creditordebts.length; i++ ) {
        if(creditordebts[i].reference === req.query.reference){
          findCustomer = creditordebts[i];
         }
        }
       
        res.locals.customer = findCustomer
        next()
         })
  
          // ---------------------------------------------------------
  
         router.get('/sold-the-debt-confirm', function (req, res, next) {
          let findCustomer = {}
        
          for (let i = 0; i < creditordebts.length; i++ ) {
          if(creditordebts[i].reference === req.query.reference){
            findCustomer = creditordebts[i];
           }
          }
  
          let status = req.session.data['debtStatus']
          if(status === 'dontOwn'){
            findCustomer.status ='dont-own' 
            findCustomer.todo='No'}   
         
          res.locals.customer = findCustomer
          next()
           })
    
      // ---------------------------------------------------------


     router.get('/review-completed-confirm', function (req, res, next) {
      let findCustomer = {}
    
      for (let i = 0; i < creditordebts.length; i++ ) {
      if(creditordebts[i].reference === req.query.reference){
        findCustomer = creditordebts[i];
       }
      }
     
      res.locals.customer = findCustomer
      next()
       })

         // ---------------------------------------------------------
  
  
        router.post('/account-landing-tabs', function (req, res, next) {
        
        console.log('parma', req.body);
        
        const path = 'account-landing-tabs?reference=' + req.body.reference
            
        res.redirect(301, `account-landing-tabs?reference=${req.body.reference}`)
        });



   // -------------------------------- Reset client data

    router.get('/resetClientData', function (req, res, next) {
    res.locals.customers = creditordebts
    next()
    })


    router.get('/resetClientData', function (req, res, next) {
      let creditordebts = 0
 

      let status = req.session.data['debtReset']
      if(status === 'reset'){
        creditordebts.todo='No'
      }   
     
      res.locals.customer = creditordebts
      next()
       })
  
  



module.exports = router