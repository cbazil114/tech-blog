const router = require('express').Router();
const userRoutes = require('./userRoutes');
const dashboardRoutes = require('../dashboardRoutes');
const apiRoutes = require('./api');

router.use('/users', userRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/api', apiRoutes);

module.exports = router;
