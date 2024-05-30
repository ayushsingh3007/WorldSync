const Attendance = require('../models/Attendence.js');
const Employee = require('../models/Employee');
const { getCurrentTime } = require('../utils/timeUtils.js');

exports.markAttendance = async (req, res) => {
  const { employeeId } = req.body;
  try {
    const employee = await Employee.findById(employeeId);
    if (!employee) {
      return res.status(404).json({ error: 'Employee not found' });
    }
    const checkIn = getCurrentTime(employee.country);
    const attendance = new Attendance({ employee: employeeId, checkIn });
    await attendance.save();
    res.status(201).json({ message: 'Attendance marked successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getAllAttendance = async (req, res) => {
  try {
    const attendance = await Attendance.find().populate('employee');
    res.json(attendance);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
