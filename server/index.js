const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const employeeRoutes = require('./routes/employeeRoutes');
const postRoutes = require('./routes/postRoutes');
const attendanceRoutes = require('./routes/attendenceRoutes.js');

dotenv.config();
const Port=process.env.PORT||5000
const app = express();
connectDB();

app.use(bodyParser.json());

app.use('/api/auth', authRoutes);
app.use('/api/employees', employeeRoutes);
app.use('/api/posts', postRoutes);
app.use('/api/attendance', attendanceRoutes);


app.listen(Port, () => {
  console.log(`Server is running on port ${Port}`);
});
