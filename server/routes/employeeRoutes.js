const express = require('express');
const { addEmployee, deleteEmployee, updateEmployee, getAllEmployees } = require('../controller/employeeController');
const router = express.Router();

router.post('/add', addEmployee);
router.delete('/:id', deleteEmployee);
router.put('/:id', updateEmployee);
router.get('/', getAllEmployees);

module.exports = router;
