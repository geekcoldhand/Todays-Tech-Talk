const router = require("express").Router();
const apiRoutes = require("./api");
const homeRoutes = require("./homepageRoutes");
const dashRoutes = require("./dashboardRoutes");

router.use("/api", apiRoutes);

router.use("/dashboard", dashRoutes);

router.use("/", homeRoutes);

router.use("/*", (req, res) => {
  res.send("<header> 404 </header>");
});

module.exports = router;
