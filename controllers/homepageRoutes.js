const router = require("express").Router();
const { Post, Comment, User } = require("../models");
const withAuth = require("../utils/auth");

// all posts
router.get("/", async (req, res) => {
  try {
    const postData = await Post.findAll(
      { raw: true },
      {
        include: [User],
      }
    );

    if (postData != null) {
      console.log(postData);
      res
        .status(200)
        .render("homepage", { postData, loggedIn: req.session.loggedIn });
    } else {
      res.status(404).end("not found");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

// speficifc post by id
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

module.exports = router;
