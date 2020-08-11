router.get('/creditor-v4/homepage', function (req, res, next)
  {
    
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
