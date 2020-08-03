const mongoose = require('mongoose');
// USbVcAGdNMR93E3k
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true
    })

    console.log(`MongoDB Atlas conected: ${conn.connection.host}`.cyan.underline.bold);
  } catch (err) {
    console.log(`Error: ${err.message}`.red.bold);

    process.exit(1);
  }
}


module.exports = connectDB;