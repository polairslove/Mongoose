const connectDb = require("./dbConnection");
const Employee = require("./models/employeesModel");

async function getEmployees() {
    const Empl1 = await Employee.find();

    console.log(`get ${Empl1}`);
    process.exit(0);
}

connectDb();
getEmployees();





