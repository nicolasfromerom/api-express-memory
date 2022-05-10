const express = require("express");
const faker = require("faker");

const router = express.Router();

router.get('/', (request, response) => {
  const products = [];
  const { size } = request.query;
  const limit = size || 10;
  for (let index = 0; index < limit; index++) {
    products.push({
      name: faker.commerce.productName(),
      price: parseFloat(faker.commerce.price()),
      image: faker.image.imageUrl()
    })

  }
  response.json(products);
});

router.get('/filter', (request, response) => {
  response.send('soy un filter');
});

router.get('/:id', (request, response) => {
  const { id } = request.params;
  response.json([
      {
        id: id,
        name : 'product 1',
        price : 1000,
      }
  ]);
});

module.exports = router;
