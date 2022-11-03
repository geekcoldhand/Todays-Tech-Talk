const router = require("express").Router();
const { Post, Comment, User } = require("../models");
const withAuth = require("../utils/auth");

// home page with all post
router.get("/", async (req, res) => {
  try {
    const postData = await Post.findAll({
      include: [User],
    });

    const posts = postData.map((post) => post.get({ plain: true }));

    res.status(200).render("homepage", posts);
  } catch (err) {
    res.status(500).json(err);
  }
});

// more details about post
router.get("/post/:id", withAuth, async (req, res) => {
  try {
    const postData = await Post.findOne({
      where: {
        id: req.params.id,
      },

      include: [
        {
          model: Comment,
          include: {
            model: User,
            attributes: ["username"],
          },
        },
        {
          model: User,
          attributes: ["username"],
        },
      ],
    });
    if (postData != null) {
      const post = postData.get({ plain: true });
      console.log(post);
      // send new post object to hb
      res.status(200).render("post", { post, loggedIn: req.session.loggedIn });
    } else {
      res.status(404).end("not found");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

// login to create more post
router.get("/login", (req, res) => {
  res.render("login");

  // redirect them to the dashboard route
});
module.exports = router;