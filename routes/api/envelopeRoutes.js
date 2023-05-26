const router = require('express').Router();

const { Envelope } = require('../../models/Envelope');

//creates a new envelope for the account
router.post("/envelope", ({body}, res) => {
    Envelope.create(body)
      .then(dbEnvelope => {
        res.json(dbEnvelope);
      })
      .catch(err => {
        res.status(404).json(err);
      });
  });

  //retrieves all the envelopes for the account
  router.get("/envelope", (req, res) => {
    Envelope.find({})
      .then(dbEnvelope => {
        res.json(dbEnvelope);
      })
      .catch(err => {
        res.status(404).json(err);
      });
  });

  module.exports = router;