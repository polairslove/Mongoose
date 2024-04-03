const connectDb = require("./dbConnection");
const seat = require("./models/seatModel");

async function deleteseat() {

    try {

        await seat.deleteOne({ "id": 18 });
        console.log('delete ok ');
        
    }
    catch (err) {
        console.log(err);
        process.exit(0);
    }

}

connectDb();
deleteseat();





