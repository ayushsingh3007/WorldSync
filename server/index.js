const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 8000;
const { route } = require("./routes/employeeRouter");
const connectDB = require("./config/db");
const cors = require("cors");

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/employees',route)

app.listen(port, () => {
try{
     connectDB()
  console.log("Server is running on port 8000");
}
catch(err){
      console.log('error in running the server ')
}
});