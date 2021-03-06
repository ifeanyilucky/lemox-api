const router = require('express').Router();
const {
  getAllIdentity,
  getSingleIdentity,
  verifyIdentity,
  updateVerification,
} = require('../controllers/identityVerification.js');
const auth = require('../middlewares/authentication');
router.route('/').post(auth, verifyIdentity).get(auth, getAllIdentity);
router.route('/:id').get(getSingleIdentity).patch(auth, updateVerification);

module.exports = router;
