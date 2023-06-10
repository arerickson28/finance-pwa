const router = require('express').Router();

const { Transaction } = require('../../models/Transaction');

//creates a new envelope for the account
router.post("/", ({body}, res) => {
    Transaction.create(body)
      .then(transaction => {
        res.json(transaction);
      })
      .catch(err => {
        res.status(404).json(err);
      });
  });


module.exports = router;