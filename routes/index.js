var express = require('express');
var router = express.Router();

const indexController = require("../controllers/indexController");

const auth = require('../middlewares/auth');

/* GET home page. */
router.get('/', auth, indexController.index);
router.get('/login', indexController.login);



module.exports = router;