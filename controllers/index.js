const router = require("express").Router();
const apiRoutes = require("./api");
const homeRoutes = require("./postFeedRoute");
const dashRoutes = require("./dashboardRoutes");

router.use("/api", apiRoutes);

router.use("/dashboard", dashRoutes);

router.use("/", homeRoutes);

module.exports = router;
