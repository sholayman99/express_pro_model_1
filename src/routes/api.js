const express = require('express');
const { demo1, demo2, demo3 } = require('../controllers/demoControllers');
const router = express.Router();

router.get('/demo1' , demo1);
router.get('/demo2' , demo2);
router.post('/demo3' , demo3);


module.exports = router ;