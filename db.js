const mysql = require('mysql');
const connection = mysql.createConnection({
    host     : process.env.Host,
    user     : process.env.User,
    password : process.env.Senha,
    database : process.env.Db
});
connection.connect(function(err) {
    if (err) {
      console.error('error connecting: ' + err.stack);
      return;
    }
  
    console.log('connected as id ' + connection.threadId);
  });

module.exports=connection