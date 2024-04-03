const connectDb = require("./dbConnection");
const seat = require("./models/seatModel");

async function insertseat() {

    connectDb();
    try {

        const newseat = new seat({
            "id": 17,
            "hall_name": "西海厅",
            "s_numb": 1,
            "type": "Normal",
            "status": "可用"
                  
        })
    await newseat.save();
    console.log("access insert")

}
    catch (err) {

    console.log(err);
    process.exit(0);

}
}
insertseat();





