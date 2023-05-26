const router = require('express').Router();
const accountRoutes = require('./accountRoutes');
const envelopeRoutes = require('./envelopeRoutes')
const expenseRoutes = require('./expenseRoutes');
const userRoutes = require('./userRoutes');

router.use('/accounts', accountRoutes);
router.use('/envelopes', envelopeRoutes);
router.use('/expenses', expenseRoutes);
router.use('/users', userRoutes)

module.exports = router;