const connectDb = require("./dbConnection");
const Employee = require("./models/employeesModel");

async function deleteEmployees() {
    
    try{

     await  Employee.deleteOne({"name":"aaabbcc"});
        console.log('delete ok ');
    }
catch(err){
    console.log(err);
    process.exit(0);
}
   
}

connectDb();

deleteEmployees();





