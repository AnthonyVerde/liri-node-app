# LIRI Node App

## The assignment:
In this assignment, you will make LIRI. LIRI is like iPhone's SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a Language Interpretation and Recognition Interface. LIRI will be a command line node app that takes in parameters and gives you back data.

## Checklist:
* LIRI will search Spotify for songs, Bands in Town for concerts, and OMDB for movies.
* Make a new GitHub repository called liri-node-app and clone it to your computer.
* To retrieve the data that will power this app, you'll need to send requests to the Bands in Town, Spotify and OMDB APIs. You'll find these Node packages crucial for your assignment.
* Node-Spotify-API
* Request
* You'll use Request to grab data from the OMDB API and the Bands In Town API
* Moment
* DotEnv

## Functionality:
**INSTRUCTIONS FOR LIRI**
1. spotify-this-song
1. concert-this
1. movie-this

**No instruction given:**
If no instruction is given, you will be prompted to provide LIRI with instruction
![No instruction given](/assets/step1.png)
![No instruction given](/assets/step2.png)

**Spotify functionality:**
If 'spotify-this-song' is inserted, LIRI will provide a default response
![Spotify default](/assets/step3.png)
![Spotify default result](/assets/step4.png)

If a song is input by the user, LIRI will provide a response containing information about the artist, song name, a preview link (if available), and the album
![Spotify user input result](/assets/step5.png)

**Bandsintown functionality:**
If 'concert-this' is inserted, LIRI will provide a default response
![Bandsintown default](/assets/step6.png)
![Bandsintown default result](/assets/step7.png)

If a band name is input by the user, LIRI will provide a response containing information about the band name, date of concert, venue location, city, and country
![Bandsintown user input](/assets/step8.png)
![Bandsintown user input result](/assets/step9.png)

**OMDB functionality**
If 'movie-this' is inserted, LIRI will provide a default response
![OMDB default](/assets/step10.png)
![OMDB default response](/assets/step11.png)

If a movie title is input by the user, LIRI will provide a response containing information about the movie title, year released, actors, IMDB rating, Rotten Tomatoes rating, and the plot 
![OMDB user input](/assets/step12.png)
![OMDB user input result](/assets/step13.png)

All responses from LIRI, including errors (if any), are appended to the log.txt file.


