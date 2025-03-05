const ensureAuthenticated = require('../Middlewares/Auth');

const router = require('express').Router();

router.get('/', ensureAuthenticated, (req, res) => {
    console.log('---- logged in user detail ---', req.user);
    res.status(200).json([
        {
            name: "Pixel 9 Pro",
            price: 80000
        },
        {
            name: "Samsung tv",
            price: 50000
        }
    ])
});

module.exports = router;