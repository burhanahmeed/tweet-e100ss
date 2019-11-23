var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "12345",
  database: "tweetss",
  charset : 'utf8mb4'
});

con.connect(function (err){
    if(err) throw err;
});

module.exports = con;