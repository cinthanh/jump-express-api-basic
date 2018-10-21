const express = require('express');
const router  = express.Router();

// hadle incoming GET request /orders
router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Orders Get'
    });
});

// hadle incoming POST request /orders
router.post('/', (req, res, next) => {
    res.status(201).json({
        message: 'Orders POST was create!'
    });
});

// hadle incoming GET detail /orders/id
router.get('/:orderId', (req, res, next) => {
    res.status(200).json({
        message: 'Orders/id (Order details) was GET!',
        _orderId: req.params.orderId
    });
});

router.delete('/:orderId', (req, res, next) => {
    res.status(200).json({
        message: 'Orders/id (Order Delete) was DELETE::route!',
        _orderId: req.params.orderId
    });
});

module.exports = router;