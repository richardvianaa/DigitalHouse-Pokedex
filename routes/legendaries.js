const express = require('express');
const router = express.Router();
const controller = require('../controllers/LegendariesController');
const isLegendaryValidet = require('../middlewares/legendaryValidet');
const auth = require('../middlewares/auth');

router.get('/', controller.index);


router.post('/', auth, isLegendaryValidet, controller.create);





module.exports = router;