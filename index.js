const express = require("express");
const cors = require('cord');
const routerApi = require('./routes');
const { logErrors, errorHandler, boomErrorHandler } = require('./middlewares/error.handler');

const app = express();
const port = 3000;

app.use(express.json());

const whiteList = ['http://localhost:80'];
const options = {
  origin: ( origin, callback ) =>{
    if (whiteList.includes(origin)) {
      callback(null, true);
    }else{
      callback(new Error('no permitido'));
    }
  }
};
app.use(cors(options));

routerApi(app);

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);



app.listen(port, () => {
  console.log('Escuchando en el puerto ' + port);
})
