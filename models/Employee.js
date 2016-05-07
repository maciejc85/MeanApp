var mongoose = require('mongoose');

var employeeSchema = mongoose.Schema({employeeAge : String, employeeName : String});
var Employee = mongoose.model('Employee', employeeSchema);