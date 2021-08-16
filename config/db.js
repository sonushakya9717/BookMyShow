const mongoose = require("mongoose");
const db=process.env.mongoURI

const connectDB = async () => {
    try {
        await mongoose.connect(db, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false,
        });
        console.log("mongoDB connected");
    } catch (err) {
        console.error(err.message);
        // EXIT process with failure
        process.exit(1);
    }
};

module.exports = connectDB;