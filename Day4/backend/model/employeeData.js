const mongoose=require('mongoose');
const employeeSchema=mongoose.Schema({
    employeeName:String,
    employeeDepartment:String,
    experience:String,
    salary:Number
})
const EmployeeData=mongoose.model('employee',employeeSchema);
module.exports=EmployeeData