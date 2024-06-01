const express=require('express');
const { addEmployee, allEmployees, attendenceSpecificDate, attendenceSubmitting, attendanceReport } = require('../controller/employeeController');
const router=express.Router();

router.post('/addEmployee',addEmployee)
router.get('/employee',allEmployees)
router.get('/attendence',attendenceSpecificDate)
router.post('/submitAttendence',attendenceSubmitting)
router.get('reportAttendenceAll',attendanceReport)

module.exports=router;