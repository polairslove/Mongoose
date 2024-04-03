const connectDb = require("./dbConnection");
const ApplicationDetail = require("./models/a_ApplicationDetailsModel");

async function deleteApplicationDetail() {

    try {

        await ApplicationDetail.deleteOne({ "id": 22 });
        console.log('delete ok ');
        
    }
    catch (err) {
        console.log(err);
        process.exit(0);
    }

}

connectDb();

deleteApplicationDetail();





