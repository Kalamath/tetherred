const path = require("path");
const router = require("express").Router();
const userRoutes = require("./authRoutes");
const chirpRoutes = require("./chirpRoutes");
const userProfileRoutes = require("./userProfileRoutes");


// API Routes
router.use("/api/sessions", userRoutes);

router.use("/api/chirps", chirpRoutes);

router.use("/api/profile", userProfileRoutes);
router.use("/api/news", newsRoutes); 
// If no API routes are hit, send the React app
router.use(function (req, res) {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;