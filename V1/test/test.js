const http = require("http");
const db= require("../models/persistence.js");
const { podcasts, subscribe } = require("../models/persistence.js");;
// Imports the podcast feeds one after the other
// ‘Syntax’ and “Working Draft”
db.subscribe("https://feeds.megaphone.fm/FSI1483080183", () => {
 db.subscribe("https://workingdraft.de/feed/", () => {
 console.log("Podcasts imported.");
 });
 });


const server = http.createServer((request, response) => {
  response.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });

  const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>Podcast App</title>
      </head>
      <body>
        <h1>Podcasts</h1>

        ${podcasts.map(p => `
          <section>
            <h2>${p.title}</h2>
            <p>${p.desc}</p>
            <img src="${p.imageurl}" alt="${p.title}" width="200">
            <ul>
              ${p.episodes.map(e => `<li>${e.title}</li>`).join("")}
            </ul>
          </section>
        `).join("")}

      </body>
    </html>
  `;

  response.end(html);
});

server.listen(8844, () => {
  console.log("Server running at http://localhost:8844");
});
