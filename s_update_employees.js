const connectDb = require("./dbConnection");
const Employee = require("./models/employeesModel");

async function updateEmployees() {
  
    try{
        await Employee.updateOne(
        {"name":"alisha runuo"},
        {"job":"aaa"}
    ); 
    }
    catch(err){
        console.log(err);
    }
    

}

connectDb();
updateEmployees();





