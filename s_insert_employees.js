const connectDb = require("./dbConnection");
const Employee = require("./models/employeesModel");

async function insertEmployees() {

    connectDb();
    try {

    const newEmpl = new Employee({'name':'',"job":"eater"})
    await newEmpl.save();
    console.log("access insert")        

    }
    catch (err){      
        
            console.log(err);
            process.exit(0);
       
            
    }

    
}


insertEmployees();





