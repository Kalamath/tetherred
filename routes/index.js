const path = require("path");
const router = require("express").Router();
const userRoutes = require("./authRoutes");
const chirpRoutes = require("./chirpRoutes");
const userProfileRoutes = require("./userProfileRoutes");
const sportsRoutes = require("./sportsRoutes");

const entertainmentRoutes = require("./entertainmentRoutes");

const newsRoutes = require("./newsRoutes");



// API Routes
router.use("/api/sessions", userRoutes);

router.use("/api/chirps", chirpRoutes);

router.use("/api/profile", userProfileRoutes);

// please dont touch this code
router.use("/api", newsRoutes)
router.use("/api", sportsRoutes);
router.use("/api", entertainmentRoutes);


module.exports = router;