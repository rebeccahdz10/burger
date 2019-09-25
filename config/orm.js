var connection = require("./connection.js");

var tableName = "burgers";

var orm = {

    // METHODS TO UPDATE MYSQL
    //SELECT ALL
    selectAll: function (result) {
        var queryString = "SELECT * FROM" + tableName;
        connection.query(queryString, function (err, result) {
            console.log(result);
        });
    },
    //INSERT ONE
    insertOne: function (burger, callback) {
        var queryString = "INSERT INTO" + tableName + "(burger_name, devoured) VALUES (?,?)";

        connection.query(queryString, [burger.burger_name, burger.devoured], function (err, result) {
            if (err) throw err;
            console.log(result);
        });
    },
    //UPDATE ONE
    updateOne: function (burger, result) {
        var queryString = "UPDATE " + tableName + "SET text=? WHERE id =?"

        connection.query(
            queryString,
            [burger.burger_name, burger.devoured],
            function (err, result) {
                if (err) throw err;
                console.log(result);
            }
        );
    }
};

//EXPORT IN MODULE.EXPORTS
module.exports = orm;