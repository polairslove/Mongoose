const connectDb = require("./dbConnection");
const ApplicationDetail = require("./models/a_ApplicationDetailsModel");

async function getApplicationDetails() {
    const Details = await ApplicationDetail.find();

    console.log(`get ${Details}`);
    process.exit(0);
}

connectDb();
getApplicationDetails();





