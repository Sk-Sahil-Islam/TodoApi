const mongoose = require('mongoose');

const connectDB = async () => {
    // eslint-disable-next-line no-unused-vars
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB connected: ${conn.connection.host}`.cyan.bold);
}

module.exports = connectDB;