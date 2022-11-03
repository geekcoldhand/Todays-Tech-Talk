const { Comment } = require("../models");

const commentData = [
  {
    content: `Lorem ipsum dolor sit amet, consectetur ut aliquip ex ea commodo consequat.`,
    userId: 2,
    title: "Lorem amet",
  },
  {
    content: `Lorem ipsum dolor sit amet, consectetur ut aliquip ex ea commodo consequat.`,
    userId: 1,
    title: "Lorem ipsum",
  },
  {
    content: `Lorem ipsum dolor sit amet, consectetur ut aliquip ex ea commodo consequat.`,
    userId: 2,
    title: "Lorem dolor",
  },
  {
    content: `Lorem ipsum dolor sit amet, consectetur ut aliquip ex ea commodo consequat.`,
    userId: 3,
    title: "Lorem",
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
