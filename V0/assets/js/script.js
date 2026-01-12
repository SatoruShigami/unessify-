const getViewportWidth = () => window.innerWidth ||document.documentElement.clientWidth;
console.log(`the viewport width is: ${getViewportWidth()} px`);
if (getViewportWidth() <= screen.width * 0.3) {
    alert("Your screen is small compared to the viewport width!");
}
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
let Podcast1 = new podcast("Learn JavaScript","A podcast about JavaScript","John Doe","John Doe","john@example.com","https://example.com/image1.jpg","https://example.com/feed1.xml",["JavaScript","Programming"],[]);
let Podcast2 = new podcast("Web Development","All about web development","Jane Smith","Jane Smith","jane@example.com","https://example.com/image2.jpg","https://example.com/feed2.xml",["Web Development","Programming"],[]);
let Podcasts = [Podcast1, Podcast2];
Podcast1.addepisode(new Episode("Episode 1","Introduction to JavaScript",1800000));
Podcast1.addepisode(new Episode("Episode 2","JavaScript Basics",2400000));
Podcast2.addepisode(new Episode("Episode 1","Getting Started with Web Development",2100000));
Podcast2.addepisode(new Episode("Episode 2","HTML and CSS Fundamentals",2700000));
for (let i = 0 ;i<Podcasts.length  ; i++){
    console.log(`${Podcasts[i].title} :`);
    for (let j = 0 ; j < Podcasts[i].episodes.length; j++){
        console.log( `${Podcasts[i].episodes[j].title} - Duration: ${Podcasts[i].episodes[j].handmins()}`);
    }
}