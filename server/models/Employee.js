const mongoose = require("mongoose");
const schema = mongoose.Schema;
const employeeSchema = new schema({
  name: {
    type: String,
  },
  designation: {
    type: String,
  },
  email: {
    type: String,
  },
  phone: {
    type: String,
  },
  age: {
    type: String,
  },
});
const Employee = mongoose.model("Employeee", employeeSchema);
module.exports = Employee;
