const express = require('express');
const router = express.Router();


const legendariesController = require('../controllers/LegendariesController');


router.get('/pineco', legendariesController.getAllLegendary);





module.exports = router;