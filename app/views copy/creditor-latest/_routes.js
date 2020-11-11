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
  
  
    router.get('/*', function (req, res, next) {
      let findCustomer = {}
 
      for (let i = 0; i < creditordebts.length; i++ ) {
      if(creditordebts[i].reference === req.query.reference){
        findCustomer = creditordebts[i];
      }
  
      }

      res.locals.customer = findCustomer
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

      let status = req.session.data['protection']
      if(status === 'completed'){
        findCustomer.todo='No'
        findCustomer.substatus='Yes'
       }
  
     
      res.locals.customer = findCustomer
      next()
       })

    // ---------------------------------------------------------


     
    router.get('/review-debt-details-rejected', function (req, res, next)
    {
    let findCustomer = {}
  
    for (let i = 0; i < creditordebts.length; i++ ) {
    if(creditordebts[i].reference === req.query.reference){
      findCustomer = creditordebts[i];
     }
    }

    let status = req.session.data['protection']
    if(status === 'rejectedcompleted'){
      findCustomer.todo='No'
      findCustomer.substatus='Yes'
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


     router.get('/add-debt', function (req, res, next) {
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


     router.get('/add-debt-confirm', function (req, res, next) {
      let findCustomer = {}
    
      for (let i = 0; i < creditordebts.length; i++ ) {
      if(creditordebts[i].reference === req.query.reference){
        findCustomer = creditordebts[i];
       }
      }


      let status = req.session.data['adddebt']
      if(status === 'yes'){
        findCustomer.substatus ='proposedDebt' 
        }   
     
      res.locals.customer = findCustomer
      next()
       })



           // ---------------------------------------------------------


     router.get('/review-client', function (req, res, next) {
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


     router.get('/review-client-confirm', function (req, res, next) {
      let findCustomer = {}
    
      for (let i = 0; i < creditordebts.length; i++ ) {
      if(creditordebts[i].reference === req.query.reference){
        findCustomer = creditordebts[i];
       }
      }


      let status = req.session.data['debtStatus']
      if(status === 'clientReview'){
        findCustomer.clientReview ='yes' 
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

    let findCustomer = {}
    let findCustomer2 = {}
    let findCustomer3 = {}
    let findCustomer4 = {}
    let findCustomer5 = {}
    let findCustomer6 = {}
     
    for (let i = 0; i < creditordebts.length; i++ ) {

    if(creditordebts[i].reference === 'VFDgzk9NKIu6O'){
      findCustomer = creditordebts[i];
     }

    if(creditordebts[i].reference === 'WXOmP5LuJwiU2'){
      findCustomer2 = creditordebts[i];
     }
    
     if(creditordebts[i].reference === 'JMFYIFw1KB3fg'){
      findCustomer3 = creditordebts[i];
     }
     
     if(creditordebts[i].reference === 'SKFnFFE3LcJbs'){
      findCustomer4 = creditordebts[i];
     } 

     if(creditordebts[i].reference === 'HCQ4xqX3xBfRd'){
      findCustomer5 = creditordebts[i];
     } 

     if(creditordebts[i].reference === 'LMDUypbrz9oS1'){
      findCustomer6 = creditordebts[i];
     } 

        
     if(creditordebts[i].reference === 'EFNUupyThEwv1'){
      findCustomer7 = creditordebts[i];
     } 

           
     if(creditordebts[i].reference === 'FXWvIvRill0O7'){
      findCustomer8 = creditordebts[i];
     } 

           
     if(creditordebts[i].reference === 'WSWV041GW4bJB'){
      findCustomer9 = creditordebts[i];
     } 

    }

    let status = req.session.data['debtReset']
      if(status === 'yes'){
        findCustomer.status ='new' 
        findCustomer.todo='Yes'
        findCustomer.substatus=''
        findCustomer.clientReview=''
        findCustomer2.status ='new' 
        findCustomer2.todo='Yes'
        findCustomer2.substatus=''
        findCustomer2.clientReview=''
        findCustomer3.status ='new' 
        findCustomer3.todo='Yes'
        findCustomer3.substatus=''
        findCustomer3.clientReview=''
        findCustomer4.status ='new' 
        findCustomer4.todo='Yes' 
        findCustomer4.substatus=''
        findCustomer4.clientReview=''
        findCustomer5.status ='review-rejected' 
        findCustomer5.todo='Yes'
        findCustomer5.substatus=''
        findCustomer5.clientReview=''
        findCustomer6.status ='review-accepted' 
        findCustomer6.todo='Yes'
        findCustomer6.substatus='' 
        findCustomer6.clientReview=''
        findCustomer7.status ='new' 
        findCustomer7.todo='Yes'
        findCustomer7.substatus=''
        findCustomer8.status ='client-review-rejected' 
        findCustomer8.todo='Yes'
        findCustomer8.substatus=''
        findCustomer9.status ='client-review-accepted' 
        findCustomer9.todo='Yes'
        findCustomer9.substatus=''
      }  
    
    next()
     })

  
  



module.exports = router