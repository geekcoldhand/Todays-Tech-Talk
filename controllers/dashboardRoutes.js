const router = require("express").Router();
const withAuth = require("../utils/auth");
const { Post, User, Comment } = require("../models/");

// render new post page
router.get("/post/new", withAuth, async (req, res) => {
  try {
    const dashData = await Post.findByPk(req.session.user_id, {
      include: [
        {
          model: User,
          attributes: ["username"],
        },
      ],
    });

    // const dash = dashData.get({ plain: true });
    const dashboard = dashData.map((dash) => dash.get({ plain: true }));
    // render the edit post page
    res.status(200).render("post", {
      dashboard,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

// all post by user route
router.get("/", withAuth, async (req, res) => {
  try {
    console.log("session id:", req.session);
    const postData = await Post.findAll({
      where: { user_id: req.session.user_id },
      include: [
        {
          model: User,
          attributes: ["username"],
        },
      ],
    });

    const posts = postData.map((post) => post.get({ plain: true }));

    // render the main dashboard page
    res
      .status(200)
      .render("dashboard", { posts, loggedIn: req.session.loggedIn });
  } catch (err) {
    res.status(500).error(err);
  }
});
module.exports = router;
