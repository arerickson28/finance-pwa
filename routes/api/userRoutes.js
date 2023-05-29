const router = require('express').Router();

const { User } = require('../../models/User');

//creates a new user
router.post("/user", ({body}, res) => {
    User.create(body)
      .then(dbUser => {
        res.json(dbUser);
      })
      .catch(err => {
        res.status(404).json(err);
      });
  });


  //get a user's account
  router.get("/user/account",(req, res) => {
    User.findOne({ 'userName': 'testUser' }, 'account')
    .then(dbEnvelope => {
        res.json(dbEnvelope);
      })
      .catch(err => {
        res.status(404).json(err);
      });
  } )

  //get a user's account envelopes
  router.get("/user/envelopes", async (req, res) => {
    await User.findOne({ 'userName': 'testUser' }, 'account.envelopes')
    .then(dbEnvelope => {
        res.json(dbEnvelope);
      })
      .catch(err => {
        res.status(404).json(err);
      });
  } )

  //create an envelope for an account
  router.put("/user/envelopes", async ({body}, res) => {

    try {
        const data = await User.updateOne(
            {'userName': 'testUser'},
            { $push: { 'account.envelopes': body } }
             )
            res.json(data)
    }  catch (err) {
            res.status(400).json(err)
    }
   
    //  .then(dbEnvelope => {
    //     res.json(dbEnvelope);
    //  })
    //  .catch(err => {
    //     res.status(404).json(err);
    //  })
  })

  //create an expense for an account
  router.put("/user/expense", async ({body}, res) => {
    try {
        const data = await User.updateOne(
            {'userName': 'testUser'},
            { $push: { 'account.expenses': body } }
             )
            res.json(data)
    }  catch (err) {
            res.status(400).json(err)
    }

  })

   //get a user's account expenses
  router.get("/user/expense", async(req, res) => {
    await User.findOne({ 'userName': 'testUser' }, 'account.expenses')
    .then(dbEnvelope => {
        res.json(dbEnvelope);
      })
      .catch(err => {
        res.status(404).json(err);
      });
  })

  //get a specific expense
  router.get("/user/expense/:id", async (req, res) => {

    try {
        await User.find(
            { 
            "userName": "testUser",
            "account.expenses._id": req.params.id, 
             },
             {"account.expenses.$": 1}
        )

     
        .then((data) => {
            res.json(data)
        })
    
       
     
        // res.send("hi")
        
    } catch (err) {
        res.status(400).json(err)
    }

   //put an expense into expenses due
    router.post("/user/expenseDue/:id", async ({body}, res) => {

        try {
            const expenseDue = await User.updateOne(
                { 'userName': 'testUser' },
                { $push: { 'account.due': body } }
                )
            res.json(expenseDue)
        } catch (err) {
            res.status(400).json(err)
        }
     
    })
    
  })



module.exports = router;