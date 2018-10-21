const express = require('express');
const router  = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Orders Get'
    });
});

router.post('/', (req, res, next) => {
    res.status(201).json({
        message: 'Orders POST was create!'
    });
});

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