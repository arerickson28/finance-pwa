const router = require('express').Router();

const { Expense } = require('../../models/Expense');

//creates a new envelope for the account
router.post("/", ({body}, res) => {
    Expense.create(body)
      .then(expense => {
        res.json(expense);
      })
      .catch(err => {
        res.status(404).json(err);
      });
  });



  router.get("/accountId/:accountId", (req, res) => {
    Expense.find({"accountId": req.params.accountId})
      .then(expenses => {
        res.json(expenses);
      })
      .catch(err => {
        res.status(404).json(err);
      });
  });

module.exports = router;