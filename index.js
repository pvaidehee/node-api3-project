// code away!
const port = process.env.PORT || 4000;
const server = require('./server');

server.listen(port, () => 
console.log(`server is listening on ${port}`));