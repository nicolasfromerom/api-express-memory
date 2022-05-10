const express = require('express');
const router = express.Router();

router.get('/', (request, response) => {
  response.send("Hola mi server en express");
});

router.get('/nueva-ruta', (request, response) => {
  response.send("Hola soy un nueva ruta");
});

module.exports = router;
