const router = require('express').Router();
const accountRoutes = require('./accountRoutes');
const envelopeRoutes = require('./envelopeRoutes')
const expenseRoutes = require('./expenseRoutes');
const userRoutes = require('./userRoutes');
const transactionRoutes = require('./transactionRoutes')

router.use('/accounts', accountRoutes);
router.use('/envelopes', envelopeRoutes);
router.use('/expenses', expenseRoutes);
router.use('/users', userRoutes)
router.use('/transactions', transactionRoutes)

module.exports = router;