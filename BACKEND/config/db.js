const mongoose = require('mongoose');
const {MONGO_URI} = require('../env/env');
require('dotenv').config(); // Load environment variables

const connectDB = () => {
  // Connect to MongoDB
  mongoose.connect(MONGO_URI, {});

  // Event listeners for MongoDB connection
  mongoose.connection.on('connected', () => {
      console.log("Connected to MongoDB successfully");
  })
}

module.exports = {
  connectDB
}
