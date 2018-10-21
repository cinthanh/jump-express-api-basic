const express   = require('express');

const app       = express();

// ERROR need review after :0
// app.use((req, res, next) => {
//     res.status(200).json({
//         "message": "It works! Welcome <3"
//     });
// });


//defined route :_1
//const productRoutes = require('./core/api/routes/products'); //error
const productRoutes = require('./api/routes/products');

app.use('/products', productRoutes);

const orderRoutes = require('./api/routes/orders');

app.use('/orders', orderRoutes);


module.exports = app;
