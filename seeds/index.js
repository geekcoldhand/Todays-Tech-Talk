const sequelize = require("../config/connection");
const seedUser = require("./userSeeds");
const seedComments = require("./commentSeeds");
const seedPost = require("./postSeeds");

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUser();
  await seedPost();
  await seedComments();

  process.exit(0);
};

seedAll();
