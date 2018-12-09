const mongoose = require("mongoose");
const Key = require("./keys");

mongoose.connect(Key.MONGO_CONNECTION_STRING, {
  useNewUrlParser: true,
  useCreateIndex: true
});
mongoose.Promise = global.Promise;
let connection = mongoose.connection;

//Check for errors
connection.on('error', (err) => {
  if (err) {
    console.log(err);
  }
});

//Check for connections
connection.once('open', () => console.log(`connection successful!`));

module.exports = connection;