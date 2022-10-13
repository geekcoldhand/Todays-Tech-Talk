const router = require("express").Router();
const apiRoutes = require("./api");
const homeRoutes = require("./homeRoutes");
const dashRoutes = require("./dashboardRoutes");

router.use("/api", apiRoutes);

router.use("/dash", dashRoutes);

module.exports = router;
