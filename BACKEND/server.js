const express = require('express');
const bodyParser = require('body-parser');
const {connectDB} = require('./config/db');
const contactRoutes = require('./routes/contactRoute');
const dotenv = require('dotenv');
dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

connectDB();
app.use(bodyParser.json());
app.use('/api', contactRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});