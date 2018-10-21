const express = require('express');
const router  = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        "status": "Handling GET requests to /products::OKE products"
    });
});

router.post('/', (req, res, next) => {
    res.status(201).json({
        "status": "Handling POST requests to /products::OKE products"
    });
});

router.get('/:productId', (req, res, next) => {
    const id = req.params.productId;
    if(id === 'special') {
        res.status(200).json({
            "message": "Id is special (not Integer)",
            _id : id
        });
    } else {
        res.status(200).json({
            "message": "ID valid"
        });
    }
});

router.patch('/:productId', (req, res, next) => {
    res.status(200).json({
        message: 'route patch || Update product',
        _ids : req.params.productId
    });
});

router.delete('/:productId', (req, res, next) => {
    res.status(200).json({
        message: 'route delete || Delete product',
        _ids : req.params.productId
    });
});

module.exports = router;