const connectDb = require("./dbConnection");
const ApplicationDetail = require("./models/a_ApplicationDetailsModel");

async function updateApplicationDetail() {

    try {
        await ApplicationDetail.updateOne(
            { "id": 18 },
            {
                "count": 15,
                "brand": "Lenovo - thinkpad"                
            }
        );
    }
    catch (err) {
        console.log(err);
    }


}

connectDb();
updateApplicationDetail();





