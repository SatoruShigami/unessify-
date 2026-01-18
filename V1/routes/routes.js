const express = require("express");
const path = require("path");
const mid = express.urlencoded({ extended: false });
const { podcasts, subscribe } = require("../models/persistence.js");
const db = require("../models/persistence.js");

// [TODO]
// Include other required modules

const router = express.Router();

router.get("/", function (req, res) {
  // [TODO]
  // Implement: Display list of subscribed podcasts
  res.render("index", { podcasts });
});
router.get("/podcast", function (req, res) {
  // [TODO]
  // Implement: Show detail page for the podcast with the given
  // index (index is provided as a request/query parameter,
  // access with: req.query.pc)
  const pc = Number(req.query.pc);
  const podcast = db.podcasts[pc];
  if (!podcast) {
    return res.status(404).render("error");
  }
  res.render("podcast", {
    podcast,
    pc
  });
});

router.get("/episode", function (req, res) {
  // [TODO]
  // Implement: Show detail page for the episode (indices
  // are provided as request/query parameters, access with:
  // req.query.pc and req.query.ep)
 const pc = Number(req.query.pc);
  const ep = Number(req.query.ep);
  const podcast = db.podcasts[pc];
  const episode = podcast?.episodes[ep];
  if (!episode) return res.status(404).render("error");

  res.render("episode", { podcast, episode, pc, ep });

});

router.post("/subscribe", function (req, res) {
  // [TODO]
  // Implement: Subscribe to a podcast
  db.subscribe(req.body.url, () => {
    res.redirect("/");
  });
});

module.exports = router;
