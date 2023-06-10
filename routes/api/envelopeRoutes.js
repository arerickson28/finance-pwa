const router = require('express').Router();

const { Envelope } = require('../../models/Envelope');

//creates a new envelope for the account
router.post("/", ({body}, res) => {
    Envelope.create(body)
      .then(envelope => {
        res.json(envelope);
      })
      .catch(err => {
        res.status(404).json(err);
      });
  });

  //retrieves all the envelopes for the account
  router.get("/accountId/:accountId", (req, res) => {
    Envelope.find({"accountId": req.params.accountId})
      .then(envelopes => {
        res.json(envelopes);
      })
      .catch(err => {
        res.status(404).json(err);
      });
  });

  //retrieve an envelope
  router.get("/envelopeId/:envelopeId", (req, res) => {
    Envelope.findOne({"_id": req.params.envelopeId})
    .then(envelope => {
      res.json(envelope);
    })
    .catch(err => {
      res.status(404).json(err);
    })
  }) 

  //delete an envelope
  router.delete("/envelopeId/:envelopeId", (req, res) => {
    Envelope.deleteOne({"_id": req.params.envelopeId})
    .then(envelope => {
      res.json(envelope);
    })
    .catch(err => {
      res.status(404).json(err)
    })
  })

  //update envelope balance
  // router.put("/envelopeId/:envelopeId", (req, res) => {
  //   Envelope.findByIdAndUpdate(req.params.envelopeId, {"envelopeBalance": req.body.newBalance})
  //   .then(envelope => {
  //     res.json(envelope)
  //   })
  //   .catch(err => {
  //     res.status(404).json(err)
  //   })
  // })

  //subtract from envelope balance
  router.put("/envelopeId/:envelopeId", (req, res) => {
    Envelope.updateOne(
      {"_id": req.params.envelopeId},
      {$inc: {envelopeBalance: -req.body.amount}}
    )
    .then(envelope => {
      res.json(envelope)
    })
    .catch(err => {
      res.status(404).json(err)
    })
  })

  module.exports = router;