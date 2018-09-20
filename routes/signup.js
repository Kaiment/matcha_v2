const router = require("express").Router();
const mysql = require("mysql");

router.post("/", (req, res) => {
    let con = mysql.createConnection({
        host: "localhost",
        port: 3306,
        password: "password",
        user: "root",
        database: "matcha_db"
    });

    con.connect(err => {
        if (err.code === "ER_BAD_DB_ERROR") 
            console.log("DB doesn't exist");
        else
            console.log("connected");
    })
})

module.exports = router;