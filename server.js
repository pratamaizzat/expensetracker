const express = require('express');

const dotenv = require('dotenv');

const morgan = require('morgan');

const colors = require('colors');

const connectDB = require('./config/db');

dotenv.config({
  path: './config/config.env'
});

connectDB();

const transaction = require('./routes/transaction');

const app = express();

app.use('/api/v1/transactions', transaction)
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server Running in ${process.env.NODE_ENV} mode on PORT ${PORT}`.yellow.bold));