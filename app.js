import express from 'express';

const app = express();

app.use(bodyParser.json());


app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allowed-Methods', 'GET', 'POST', 'PUT', 'DELETE');
  res.setHeader('Access-Control-Allowed-Headers', 'Content-Type', 'Authorisation');
  res.setHeader('Cache-Control', 'no-cache');
  next();
});

app.listen(3000);
