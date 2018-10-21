const express   = require('express');

const app       = express();
const morgan    = require('morgan');

// ERROR need review after :0
// app.use((req, res, next) => {
//     res.status(200).json({
//         "message": "It works! Welcome <3"
//     });
// });


//defined route :_1
//const productRoutes = require('./core/api/routes/products'); //error
const productRoutes = require('./api/routes/products');
const orderRoutes = require('./api/routes/orders');

// get time get request
app.use(morgan('dev'));

// Routes which handle requests
app.use('/products', productRoutes);
app.use('/orders', orderRoutes);


// ERROR Handling
app.use((req, res, next) => {
    const error = new Error('not found');
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message 
        }
    });
});

module.exports = app;
