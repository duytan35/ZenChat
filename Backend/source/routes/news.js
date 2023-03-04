const express = require('express');
const router = express.Router();
const newsController = require('../controllers/NewsController.js');

router.get('/', newsController.index);

module.exports = router;