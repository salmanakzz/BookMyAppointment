// postgresql connection setup

const { Client } = require("pg");

const client = new Client({
  host:  process.env.HOST,
  port:  process.env.PG_PORT,
  user:  process.env.USER,
  password:  process.env.PASSWORD,
  database:  process.env.DATABASE,
});

module.exports.connect = function async(callback) {
  client.connect((err) => {
    if (err) {
      return callback(err);
    }
    callback();
  });
};

module.exports.client = client