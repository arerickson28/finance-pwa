const router = require('express').Router();

const { Transaction } = require('../../models/Transaction');

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