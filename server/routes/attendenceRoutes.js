const express = require('express');
const { markAttendance, getAllAttendance } = require('../controller/attendenceController.js');
const router = express.Router();

router.post('/mark', markAttendance);
router.get('/', getAllAttendance);

module.exports = router;
