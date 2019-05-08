const express = require('express');
const router = express.Router();

router.get('/login.html', (req, res) => {
  res.render('/login.html');
});

module.exports = router;
