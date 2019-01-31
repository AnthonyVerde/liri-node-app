require("dotenv").config();

var keys = require("./keys");
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);
var action = process.argv[2];
var input = process.argv[3];
var request = require("request");
var fs = require("fs");

//Using switch to create each command

function cmdSwitch() {

    switch (action) {

        case 'spotify-this-song':
            spotifySong(input);
            break;

        case 'concert-this':
            bands(input);
            break;

        case 'movie-this':
            movies(input);
            break;

        default:
            logged("Please provide LIRI some instruction");
            break;
    }
};

//Spotify API song search function

function spotifySong(input) {

    var songTitle;
    if (input === undefined) {
        songTitle = "The Sign - Ace of Base";
    } else {
        songTitle = input;
    }

    spotify.search({
        type: 'track',
        query: songTitle
    }, function (error, data) {
        if (error) {
            logged('Error occurred: ' + error);
            return;
        } else {
            logged("\n---------\n");
            logged("Artist: " + data.tracks.items[0].artists[0].name);
            logged("Song: " + data.tracks.items[0].name);
            logged("Preview: " + data.tracks.items[3].preview_url);
            logged("Album: " + data.tracks.items[0].album.name);
            logged("\n---------\n");
        }
    });
};

//Bandsintown API search function
function bands(input) {

    var bandName;
    if (input === undefined) {
        bandName = "Judah & the Lion";
    } else {
        bandName = input;
    }

    //Setting the Bandsintown API query URL 
    var queryURL = "https://rest.bandsintown.com/artists/" + bandName + "/events?app_id=codingbootcamp&tracker_count=10";

    request(queryURL, function (error, response, body) {

        if (!error && response.statusCode === 200){

            var jsData = JSON.parse(body);
            for (i = 0; i < jsData.length; i++) {
                var dTime = jsData[i].datetime;
                var month = dTime.substring(5, 7);
                var day = dTime.substring(8, 10);
                var year = dTime.substring(0, 4);
                var dateFormat = month + "-" + day + "-" + year;

                logged("\n---------\n");
                logged("Band:" + bandName);
                logged("Date: " + dateFormat);
                logged("Venue: " + jsData[i].venue.name);
                logged("City: " + jsData[i].venue.city);
                logged("Country: " + jsData[i].venue.country);
                logged("\n---------\n");

            }
        }
    });
}

//OMDB API movie search function
function movies(input) {

    var movieTitle;
    if (input === undefined) {
        movieTitle = "Cool Runnings";
    } else {
        movieTitle = input;
    };

    var queryURL = "http://www.omdbapi.com/?t=" + movieTitle + "&y=&plot=short&apikey=b41b7cf6";

    request(queryURL, function (err, res, body) {
        var bodyOf = JSON.parse(body);
        if (!err && res.statusCode === 200) {
            logged("\n---------\n");
            logged("Title: " + bodyOf.Title);
            logged("Release Year: " + bodyOf.Year);
            logged("Actors: " + bodyOf.Actors);
            logged("IMDB Rating: " + bodyOf.imdbRating);
            logged("Rotten Tomatoes Rating: " + bodyOf.Ratings[1].Value);
            logged("Plot: " + bodyOf.Plot);
            logged("\n---------\n");
        }
    });
};

//Log data to log.txt each time a search is performed
function logged(logData) {

    console.log(logData);

    fs.appendFile('log.txt', logData + '\n', function (err) {

        if (err) return logged('Error logging data to file: ' + err);
    });
}

cmdSwitch();