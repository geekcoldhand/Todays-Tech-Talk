const sequelize = require("../config/connection");
const { Post, User } = require("../models");
const seedUser = require("./userSeeds.json");
// const seedComments = require("./commentSeeds");
const seedPost = require("./postSeeds.json");

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await Post.destroy;
  await User.destroy;

  console.log("deleted ..XXX");

  await Post.bulkCreate(seedPost);
  await User.bulkCreate(seedUser);
  // await seedComments();

  console.log("all done ..🌱");

  process.exit(0);
};
seedAll();
