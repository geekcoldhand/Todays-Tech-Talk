const router = require("express").Router();
const userRoutes = require("./userRoutes");

router.use("/commentsRoutes", (res, req) => {
  // add the comments routes
});
router.use("/user", userRoutes);

router.use("/postRoutes", (res, req) => {
  // add the post routes
});
router.use("/", (res, req) => {
  res.send("No route selected");
});
module.exports = router;
