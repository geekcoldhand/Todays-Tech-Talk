const { User } = require("../models");

const userdata = [
  {
    username: "rayj",
    password: "helloHello",
  },
  {
    username: "kayj",
    password: "helloHello",
  },
  {
    username: "jayj",
    password: "helloHello",
  },
  {
    username: "dayj",
    password: "helloHello",
  },
];

const seedUser = () =>
  User.bulkCreate(userdata, {
    individualHooks: true,
  });

module.exports = seedUser;
