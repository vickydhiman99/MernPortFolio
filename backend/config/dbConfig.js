const mongoose = require("mongoose");

mongoose.connect(process.env.mongo_url);

const connection = mongoose.connection;

connection.on("error", ()=>{
    console.log("Error Connection In DataBase");
});

connection.on("connected", ()=>{
    console.log("MongoDB Connection Successfully");
});

module.exports = connection;