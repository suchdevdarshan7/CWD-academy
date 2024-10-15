const express = require('express')

const router = express.Router();

router
    .route('/')
    .get((req, res, next) => {
        res.send('<h1>Good response  for users in router</h1>')
    })

module.exports = router;