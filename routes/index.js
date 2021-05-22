var express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Welcome' });
});

router.get('/projects', (req, res) => {
  res.render('projects', {title: "Projects"}) 
});

router.get('/about', (req, res) => {
  res.render('about', { title: 'About' }) 
});

router.get('/contact', (req, res) => {
  res.render('contact', { title: 'Contact' }) 
});


module.exports = router;
