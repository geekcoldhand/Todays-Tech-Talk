const router = require("express").Router();
const { Comment, Post } = require("../../models");
// delete comment by id
router.delete("/:id", async (req, res) => {
  try {
    const commentData = await Comment.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!commentData) {
      res.status(404).json({ message: "No commment found with this id!" });
      return;
    }

    res.status(200).json(commentData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// create new commnet
router.post("/", async (req, res) => {
  try {
    const newComment = await Comment.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newComment);
  } catch (err) {
    res.status(400).json(err);
  }
});

// get all comments
router.get("/", async (req, res) => {
  try {
    const allComments = await Comment.findAll({
      where: {
        user_id: req.session.user_id,
      },
    });

    if (!allComments) {
      res.status(404).json({ message: "No commments found!" });
      return;
    }
    res.status(200).json(allComments);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
