const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send("Hola mi server en express");
});

router.get('/nueva-ruta', (req, res) => {
  res.send("Hola soy un nueva ruta");
});

module.exports = router;
