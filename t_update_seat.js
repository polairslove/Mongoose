const connectDb = require("./dbConnection");
const seat = require("./models/seatModel");

async function updateseat() {

    try {
        await seat.updateOne(
            { "hall_name": "西海厅" },
            {
                "type": "VIP",
                "status": "可用"                
            }
        );
    }
    catch (err) {
        console.log(err);
    }


}

connectDb();
updateseat();





