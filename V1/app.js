const express = require("express");
const path = require("path");
const persistence = require("./models/persistence.js");
const routes = require("./routes/routes.js");
const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
if (persistence.getAsideEpisodes) {
  app.use((req, res, next) => {
    res.locals.totalEpisodes = persistence.getAsideEpisodes();
    next();
  });
}
app.use("/", routes);
app.listen(8020, () => {
  console.log("Server running at http://localhost:8020");
});
