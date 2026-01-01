const parser = require("./podcastParser");

// [TODO]
// Copy your code for the objects "Podcast", "Episode", and "EpisodeAudio"
// from lab assignment 8 here (without example data!)

function podcast(title, desc, author, ownername, owneremail, imageurl,feedurl,categories,Episodes){
    this.title = title;
    this.desc = desc;
    this.author = author;
    this.ownername = ownername;
    this.owneremail = owneremail;
    this.imageurl = imageurl;
    this.feedurl = feedurl;
    this.categories = categories;
    this.lastupdate = new Date();
    this.episodes = [];
    this.addepisode = function (Episodes){
        this.episodes.push(Episodes);
    }
    this.sortEpisodesByDate = function(){
        this.episodes.sort((a,b) => b.date - a.date);
    }
} 
function Episode(title,desc,duration){
this.title = title;
this.desc = desc;
this.duration = duration;
this.date = new Date();
this.handmins = function(){
    let mins = Math.floor(this.duration / 60000);
    let hours = Math.floor(mins / 60);
    let minsLeft = mins % 60;
    return `${hours} hours and ${minsLeft} minutes`;

}
}
function episodeaudio(url,Size,type){
    this.url = url;
    this.Size = Size;
    this.type = type;
}
const podcasts = [];

/**
 * Subscribes to a podcast by importing the data from the given feed URL.
 * The import itself is asynchronous, so a callback function is needed for subsequent actions.
 *
 * @param {String} url The feed URL of the podcast to subscribe to.
 * @param {Function} callback Callback function to be called after the import is complete.
 */
function subscribe(url, callback) {
  parser.parseFeed(url, (feed) => {
    podcasts.push(convert(url, feed));
    if (callback) callback();
  });
}

/**
 * Converts the feed data imported from a URL into data objects (Podcast, Episode, EpisodeAudio)
 * suitable for this web application.
 *
 * @param {String} url The feed URL of the podcast from which it was imported.
 * @param {Object} feed Feed object according to https://www.npmjs.com/package/podcast-feed-parser#default
 */ // [TODO]
  // Implement function
function convert(url, feed) {
  const firstEpisode = feed.episodes?.[0];

  const p = new podcast(
    firstEpisode?.title || "Unknown Podcast",
    firstEpisode?.summary || firstEpisode?.description,
    null,
    null,
    null,
    firstEpisode?.imageURL,
    url,
    []
  );

  feed.episodes.forEach(e => {
    const audio = new episodeaudio(
      e.enclosure?.url,
      e.enclosure?.length,
      e.enclosure?.type
    );

    const ep = new Episode(
      e.title,
      e.description,
      e.duration * 1000 // seconds → ms if needed
    );

    ep.date = new Date(e.pubDate);
    ep.audio = audio;

    p.addepisode(ep);
  });

  p.sortEpisodesByDate();
  return p;
}


// [TODO]
// Define the module interface: make the podcasts array and subscribe function accessible from outside
module.exports = {
  podcasts,
  subscribe
};
