const router = require("express").Router();
const signup = require("./signup");

router.get("/", (req, res) => {
    res.render(__dirname + "/../views/index.pug");
});

router.use("/signup", signup);

module.exports = router;