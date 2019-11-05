const express = require('express');
const router = express.Router();
const UserController = require('../controllers/users');

// G1: GET All - Return all Club Detail
router.get('/', UserController.get_all_users);

module.exports = router;
