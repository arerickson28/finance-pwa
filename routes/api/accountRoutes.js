const router = require('express').Router();

const { Account } = require('../../models/Account');


//create account by user
router.post("/", async ({body}, res) => {
    Account.create(body)
    .then(account => {
      res.json(account);
    })
    .catch(err => {
      res.status(404).json(err);
    });
})

// get account by user
  router.get("/userId/:userId",(req, res) => {
    Account.findOne({ 'userId': req.params.userId })
    .then(account => {
        res.json(account);
      })
      .catch(err => {
        res.status(404).json(err);
      });
  } )

//update account balance
router.put("/accountId/:accountId", (req, res) => {
  Account.findByIdAndUpdate(req.params.accountId, {"balance": req.body.newBalance})
  .then(account => {
    res.json(account)
  })
  .catch(err => {
    res.status(404).json(err)
  })
})


//To deduct expense ammount from checking balance once it's applied
// router.put("/account/:id/applyExpense", async ({ body, params }, res) => {
//     try {
//         const data = await Account.updateOne({
//             "_id": params.id
//         }, {
//             $addToSet: { "checkingAmount": [body] }
//         })
//         res.json(data);
//     } catch (err) {
//         console.log(err);
//         res.status(400).json(err)
//     }
// });

// To remove an expense from the dues when it is applied
// router.put("/account/:id/dueOut", async ({ body, params }, res) => {
//     try {
//         const data = await Account.updateOne({
//             //params.id is the id of the expense
//             "_id": params.id
//         }, {
//             $pull: { "due": [body] }
//         })
//         res.json(data);
//     } catch (err) {
//         console.log(err);
//         res.status(400).json(err)
//     }
// });

// When an expense becomes due, it is added to the due section
router.put("/account/:id/dueIn", async ({ body, params }, res) => {
    try {
        const data = await Account.updateOne({
            //params.id is the id of the expense
            "_id": params.id
        }, {
            $addToSet: { "due": [body] }
        })
        res.json(data);
    } catch (err) {
        console.log(err);
        res.status(400).json(err)
    }
});

// Add a new amount receivable
router.post("/newAmountReceivable", async ({ body, params }, res) => {
   
});

// collect amount receivable / remove amount receivable

// new amount payable

// pay amount payable / remove amount payable

module.exports = router;