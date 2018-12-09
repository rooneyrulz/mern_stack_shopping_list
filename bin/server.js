const http = require("http");

//Require App
const App = require("../app");

//Create Server
const server = http.createServer(App);
const port = process.env.PORT || 5000;

//Listen the server
server.listen(port, () => console.log(`server started on port ${port}`));