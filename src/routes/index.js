import express from 'express';
var router = express.Router();

/* GET home page. */
router.get('/', async function(req, res) {

    res.render('index', { title: 'Exz  czxczp  r  ess   ss' });
});

export default router;