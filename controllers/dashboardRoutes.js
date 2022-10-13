const router = require("express").Router();
const withAuth = require("../utils/auth");

// main index route requires login
// all post by user route
router.get("/", withAuth, async (req, res) => {
  try {
    const postData = await Post.findAll({
      include: [User],
    });

    const posts = postData.map((post) => post.get({ plain: true }));

    res.render("dashboard", { posts, loggedIn: req.session.loggedIn });
  } catch (err) {
    res.status(500).json(err);
  }
});

// get specific post by user
router.get("/post/:id", async (req, res) => {
  try {
    const dashData = await Dashboard.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ["name"],
        },
      ],
    });

    const dash = dashData.get({ plain: true });

    res.render("dashboard", {
      ...dash,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// create new post

// del user post

module.exports = router;
