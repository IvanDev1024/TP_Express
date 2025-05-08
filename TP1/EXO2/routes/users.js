const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
  const users = ['Alice', 'Bob', 'Charlie'];
  res.render('users', { users }); // ✅ On passe bien la variable
});
module.exports = router;
