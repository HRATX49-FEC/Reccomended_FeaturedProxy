const express = require('express');
const path = require('path');
const httpProxy = require('http-proxy');
const PORT = process.env.PORT || 5002;

const app = express();
const proxy = httpProxy.createProxyServer({});

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));

//routes

//listen
app.listen(PORT, () => {
  console.log(`Express is listening on port ${PORT}`)
});