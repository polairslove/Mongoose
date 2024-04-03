const connectDb = require("./dbConnection");
const seat = require("./models/seatModel");

async function getseat() {
    const Empl1 = await seat.find();

    console.log(`get ${Empl1}`);
    process.exit(0);
}
connectDb();
getseat();





