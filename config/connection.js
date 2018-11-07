var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password:'',
    database: 'burger_db'
})

connection.connect(function(err){
    if(err) throw err;
    console.log('Connection Established !!!' + connection.threadId)
});

module.exports = connection;