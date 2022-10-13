const router = require("express").Router();

router.use("/commentsRoutes", (res, req) => {
  // add the comments routes
});
router.use("/userRoutes", (res, req) => {
  // add the user routes
});
router.use("/postRoutes", (res, req) => {
  // add the post routes
});
router.use("/", (res, req) => {
  res.send("No route selected");
});
module.exports = router;
