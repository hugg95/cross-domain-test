'use strict';

const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/test', function(req, res) {
    res.json({name: 'victor'});
});

router.get('/test/jsonp', function(req, res) {
    res.jsonp({name: 'victor'});
});

router.get('/test/custom_jsonp', (req, res) => {
    let callback;
    if (callback = req.query.callback) {
        const _res = {name: 'victor'};
        res.send(`${callback}({name: 'dsdsdsds'})`);
    }
});

module.exports = router;
