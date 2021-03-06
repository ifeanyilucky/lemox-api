const router = require('express').Router();
const bodyParser = require('body-parser');
const {
  getAllInvestment,
  getSingleInvestment,
  createInvestment,
  updateInvestment,
  paymentHandler,
} = require('../controllers/investment');
const auth = require('../middlewares/authentication');

router.route('/').get(auth, getAllInvestment).post(auth, createInvestment);
router.route('/data/:id').get(auth, getSingleInvestment);
router.route('/update-investment/:id').patch(updateInvestment);
router.route('/payment-handler').post(paymentHandler);

module.exports = router;
