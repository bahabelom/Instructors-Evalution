const Employee = require("../models/Employee");

const store = (req, res, next) => {
  let employee = new Employee({
    name: "Bahabelom",
    designation: "boss of himself",
    email: "dfgh",
    phone: "0987654321",
    age: "23",
  });
  employee
    .save()
    .then((response) => {
      res.json({
        message: "Employee Added Successfuly",
      });
    })
    .catch((err) => {
      res.json({
        message: "An Error Occured",
      });
    });
};

exports.store = store;
