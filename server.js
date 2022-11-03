const path = require("path");
// Express
const express = require("express");
const session = require("express-session");
const app = express();
const exphbs = require("express-handlebars");

const helpers = require("./utils/helpers");
// sequelize
const sequelize = require("./config/connection");
const SequelizeStore = require("connect-session-sequelize")(session.Store);

const PORT = process.env.PORT || 3001;
const routes = require("./controllers");

// Set up Handlebars.js engine with custom helpers
const hbs = exphbs.create({ helpers });

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const sess = {
  secret: "tech_talker",
  cookie: {
    maxAge: 400000,
    httpOnly: true,
    secure: false,
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));

// Inform Express.js on which template engine to use
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  // PORT
  app.listen(PORT, () => {
    console.log(`Listening on port http://localhost:${PORT}`);
  });
});
