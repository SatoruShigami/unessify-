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
  res.sendFile(path.join(__dirname, "../../V0/assignment/index.html"));
});
router.get("/podcast", function (req, res) {
  // [TODO]
  // Implement: Show detail page for the podcast with the given
  // index (index is provided as a request/query parameter,
  // access with: req.query.pc)
  const podcast = db.podcasts[req.query.pc];
  res.sendFile(path.join(__dirname, "../../V0/assignment/podcast.html"));
});

router.get("/episode", function (req, res) {
  // [TODO]
  // Implement: Show detail page for the episode (indices
  // are provided as request/query parameters, access with:
  // req.query.pc and req.query.ep)
  res.sendFile(path.join(__dirname, "../../V0/assignment/episode.html"));
  const podcast = db.podcasts[req.query.pc];
  const episode = podcast.episodes[req.query.ep];
});

router.post("/subscribe", function (req, res) {
  // [TODO]
  // Implement: Subscribe to a podcast
  db.subscribe(req.body.url, () => {
    res.redirect("/");
  });
});

module.exports = router;
