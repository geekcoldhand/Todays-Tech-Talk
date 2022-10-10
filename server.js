const sequelize = require("./config/connection");
// Express
const express = require("express");
const app = express();

const PORT = process.env.PORT || 3001;
const routes = require("./routes");

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// app.use(routes);

sequelize.sync().then(() => {
  // PORT
  app.listen(PORT, () => {
    console.log(`Listening on port http://localhost:${PORT}`);
  });
});
