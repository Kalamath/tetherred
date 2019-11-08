const path = require("path");
const router = require("express").Router();
const chirpRoutes = require("./chirpRoutes");


router.use("/api/chirps", chirpRoutes);

router.use(function(req, res) {
    res.sendfile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;