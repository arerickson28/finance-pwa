const { Account } = require('../../models/Account');

//To deduct expense ammount from checking balance once it's applied
router.put("/account/:id/applyExpense", async ({ body, params }, res) => {
    try {
        const data = await Account.updateOne({
            "_id": params.id
        }, {
            $addToSet: { "checkingAmount": [body] }
        })
        res.json(data);
    } catch (err) {
        console.log(err);
        res.status(400).json(err)
    }
});

// To remove an expense from the dues when it is applied
router.put("/account/:id/dueOut", async ({ body, params }, res) => {
    try {
        const data = await Account.updateOne({
            //params.id is the id of the expense
            "_id": params.id
        }, {
            $pull: { "due": [body] }
        })
        res.json(data);
    } catch (err) {
        console.log(err);
        res.status(400).json(err)
    }
});

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