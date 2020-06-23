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
app.get('/reccomended*', (req, res) => {
  console.log('Redirecting to reccomended service')
  proxy.web(req, res, {target: 'http://localhost:5001'})
})

//listen
app.listen(PORT, () => {
  console.log(`Express is listening on port ${PORT}`)
});