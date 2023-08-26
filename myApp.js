const express = require('express');
const helmet = require('helmet');
const app = express();

const PORT = process.env.port || 3030;

app.listen(PORT, () => {
  console.log('Ghost Hunter info security started on port App  ${PORT');
});

const hidePoweredBy = require('hide-powered-by')
app.use(hidePoweredBy())
app.use(helmet.frameguard({action: 'deny'}));
app.use(helmet.xssFilter({}));
app.use(helmet.noSniff({}));
app.use(helmet.ieNoOpen({}));














































module.exports = app;
const api = require('./server.js');
app.use(express.static('public'));
app.disable('strict-transport-security');
app.use('/_api', api);
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});
let port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Your app is listening on port ${port}`);
});
