require("dotenv").config();
const Sequelize = require("sequelize");

const sequelize = new Sequelize("tech_talk_db", "root", "helloDBCooper", {
  host: "localhost",
  dialect: "mysql",
  port: 3306,
  dialectOptions: {},
});

module.exports = sequelize;
