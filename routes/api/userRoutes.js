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



module.exports = router;