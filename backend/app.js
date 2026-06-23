const dotenv= require('dotenv');
dotenv.config();
const express = require('express');
const cors = require('cors');
const app = express();
const connectToDb = require('./db/db');

connectToDb();

app.use(cors());

app.use(express.json());

const userRoutes = require('./routes/register.routes');
app.use('/users', userRoutes);

const supplierRoutes = require('./routes/supplier.routes');
app.use('/suppliers', supplierRoutes);

const orderRoutes = require('./routes/order.routes');
app.use('/orders', orderRoutes);

app.get('/', (req, res) => {
    res.send("Neer-Ro");
});


module.exports = app;
