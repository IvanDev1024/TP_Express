const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  const currentTime = new Date().toLocaleTimeString();
  res.render('time', { time: currentTime });
});

module.exports = router;
