"use strict";
// var mongo_uri = process.env.MONGOLAB_URI || "";
//check for an environment variable; if it exists, I am running on Heroku; if not, I am running on my local machine.
//the dump and restore is a way to synchronize my data
// I have to do this from the terminal.
// 1. mongodump  --db themes --collection themes
//the dump folder is created. go inside this folder. Need to run the mongo restore command from this folder.Run the following code. 
//once I do the mongo dump, delete the dump folder to make sure next time is fresh data. 
//2. mongorestore -h ds029803.mongolab.com:29803 -d heroku_5fx5j4qj -u heroku_5fx5j4qj -p s5e7bubhf8nbfm28798itk76po themes
// -h is the host name and the port; where the mongolab is running; -u is username; -p password; themes is the folder where I did the dump
// -d is the database, mongolab provides; -u is found in the mongolab uri:
// MONGOLAB_URI: mongodb://heroku_5fx5j4qj:s5e7bubhf8nbfm28798itk76po@ds029803.mongolab.com:29803/heroku_5fx5j4qj
// MONGOLAB_URI: mongodb://
//-u: heroku_5fx5j4qj
//-p: s5e7bubhf8nbfm28798itk76po@ds
//from here, go back to the mongolab page. --> https://www.mongolab.com/databases/heroku_5fx5j4qj#tools
// view the collections tab. The database should be viewable now on the collections tab. 

//so to recap, first login to Heroku: 
// heroku auth:login
// then push everything to git:
// git add -A
// git commit -m " more info committed ..."
// git status
// git push heroku master
//Then, check to see if a collection is in your mongolab's collection tab.
//get a mongolab UR. then create a variable: var mongo_uri = process.env.MONGOLAB_URI || "mongodb://localhost/themes";
//then create the db object by doing the following: 
// var db = mongojs(mongo_uri, ['themes']);
//That's it for the node.js side. Now, go to the terminal.
// Here, you create a dump of the database. You go to the folder that contains the mongoDB. Then you issue the following command:
// mongodump  --db themes --collection themes
// Here, "themes" is the database used in this application. Change the name to your database name and collection name.
// Next, use this page for reference: https://www.mongolab.com/databases/heroku_5fx5j4qj#tools ( binary and IMPORT DATABASE )
// mongorestore -h ds029803.mongolab.com:29803 -d heroku_5fx5j4qj -u <user> -p <password> <input db directory>
// This is my code that worked:
// mongorestore -h ds029803.mongolab.com:29803 -d heroku_5fx5j4qj -u heroku_5fx5j4qj -p s5e7bubhf8nbfm28798itk76po themes
// the different paramters are available by running the "heroku config" command. 
var mongo_uri = process.env.MONGOLAB_URI || "mongodb://localhost/themes";
console.log("ConnectionInfo: " + mongo_uri)
var express = require('express');
var mongojs = require('mongojs');
var mongodb = require('mongodb');
// create object of mongojs type, with the database name of: "themes", and collection name of "themes"
// var db = mongojs('themes', ['themes']);
var db = mongojs(mongo_uri, ['themes']);

var SabreDev = require('sabre-dev-studio');
var sabre_dev_studio_flight = new SabreDev({
  client_id: 'V#:############:DEVCENTER:EXT',
  client_secret: '##########',
  uri: 'https://api.test.sabre.com'
});

var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();
//add in handlebars
var handlebars = require('express-handlebars').create({defaultLayout: 'main'});
app.engine('handlebars', handlebars.engine);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');
app.set('view engine', 'handlebars');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//app.use('/', routes);
app.use('/users', users);

//Get Home Page
app.get('/', function (req, res) {
  res.status = ('200');
  res.render('index');
});
// get API information

// get Theme API Information
app.get('/themes', function (req, res) {
  var options = {};
  res.type = ('json');

  var themeCall = function (error, data) {
    console.log("did get themes..........themes..........")
    if (error) {
      console.log(error);
    } else {
      res.send(JSON.parse(data));
    }
  }

  db.themes.find({airport: 'NYC'}, {'theme': 1}, function (err, docs) {
    console.log("Returned info for the themes page: " + docs);
    res.json(docs);
  })
  
});

// THEMES START HERE ---------------------------------------------------------->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//  THEMES THEMES THEMES THEMES THEMES THEMES THEMES THEMES THEMES THEMES 
// Beach Theme
app.get('/themes-beach', function (req, res) {
  var options = {};
  res.type = ('json');

  var themeCall = function (error, data) {
    console.log("did get themes..........themes..........")
    if (error) {
      console.log(error);
    } else {
      res.send(JSON.parse(data));
    }
  }
  sabre_dev_studio_flight.get('/v1/lists/supported/shop/themes/BEACH', options, themeCall);
});

// Disney Theme
app.get('/themes-disney', function (req, res) {
  var options = {};
  res.type = ('json');

  var themeCall = function (error, data) {
    console.log("did get disney themes..........themes..........")
    if (error) {
      console.log(error);
    } else {
      res.send(JSON.parse(data));
    }
  }
  sabre_dev_studio_flight.get('/v1/lists/supported/shop/themes/DISNEY', options, themeCall);
});

// Gambling Theme
app.get('/themes-gambling', function (req, res) {
  var options = {};
  res.type = ('json');

  var themeCall = function (error, data) {
    console.log("did get themes..........themes..........")
    if (error) {
      console.log(error);
    } else {
      res.send(JSON.parse(data));
    }
  }
  sabre_dev_studio_flight.get('/v1/lists/supported/shop/themes/GAMBLING', options, themeCall);
});

// HISTORIC THEME
app.get('/themes-historic', function (req, res) {
  var options = {};
  res.type = ('json');

  var themeCall = function (error, data) {
    console.log("did get themes..........themes..........")
    if (error) {
      console.log(error);
    } else {
      res.send(JSON.parse(data));
    }
  }
  sabre_dev_studio_flight.get('/v1/lists/supported/shop/themes/HISTORIC', options, themeCall);
});

// MOUNTAINS THEME
app.get('/themes-mountain', function (req, res) {
  var options = {};
  res.type = ('json');

  var themeCall = function (error, data) {
    console.log("did get themes..........themes..........")
    if (error) {
      console.log(error);
    } else {
      res.send(JSON.parse(data));
    }
  }
  sabre_dev_studio_flight.get('/v1/lists/supported/shop/themes/MOUNTAINS', options, themeCall);
});

// NATIONAL-PARKS
app.get('/themes-national-parks', function (req, res) {
  var options = {};
  res.type = ('json');

  var themeCall = function (error, data) {
    console.log("did get themes..........themes..........")
    if (error) {
      console.log(error);
    } else {
      res.send(JSON.parse(data));
    }
  }
  sabre_dev_studio_flight.get('/v1/lists/supported/shop/themes/NATIONAL-PARKS', options, themeCall);
});

// OUTDOORS
app.get('/themes-outdoors', function (req, res) {
  var options = {};
  res.type = ('json');

  var themeCall = function (error, data) {
    console.log("did get themes..........themes..........")
    if (error) {
      console.log(error);
    } else {
      res.send(JSON.parse(data));
    }
  }
  sabre_dev_studio_flight.get('/v1/lists/supported/shop/themes/OUTDOORS', options, themeCall);
});

// ROMANTIC
app.get('/themes-romantic', function (req, res) {
  var options = {};
  res.type = ('json');

  var themeCall = function (error, data) {
    console.log("did get themes..........themes..........")
    if (error) {
      console.log(error);
    } else {
      res.send(JSON.parse(data));
    }
  }
  sabre_dev_studio_flight.get('/v1/lists/supported/shop/themes/ROMANTIC', options, themeCall);
});

// SHOPPING
app.get('/themes-shopping', function (req, res) {
  var options = {};
  res.type = ('json');

  var themeCall = function (error, data) {
    console.log("did get themes..........themes..........")
    if (error) {
      console.log(error);
    } else {
      res.send(JSON.parse(data));
    }
  }
  sabre_dev_studio_flight.get('/v1/lists/supported/shop/themes/SHOPPING', options, themeCall);
});

// SKIING
app.get('/themes-skiing', function (req, res) {
  var options = {};
  res.type = ('json');

  var themeCall = function (error, data) {
    console.log("did get themes..........themes..........")
    if (error) {
      console.log(error);
    } else {
      res.send(JSON.parse(data));
    }
  }
  sabre_dev_studio_flight.get('/v1/lists/supported/shop/themes/SKIING', options, themeCall);
});

// THEME-PARK
app.get('/themes-theme-park', function (req, res) {
  var options = {};
  res.type = ('json');

  var themeCall = function (error, data) {
    console.log("did get themes..........themes..........")
    if (error) {
      console.log(error);
    } else {
      res.send(JSON.parse(data));
    }
  }
  sabre_dev_studio_flight.get('/v1/lists/supported/shop/themes/theme-park', options, themeCall);
});

// CARIBBEAN
app.get('/themes-caribbean', function (req, res) {
  var options = {};
  res.type = ('json');

  var themeCall = function (error, data) {
    console.log("did get themes..........themes..........")
    if (error) {
      console.log(error);
    } else {
      res.send(JSON.parse(data));
    }
  }
  sabre_dev_studio_flight.get('/v1/lists/supported/shop/themes/caribbean', options, themeCall);
});
// THEMES End HERE------------------------------------------>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// //////////////////////////////////////////////////////////////////////////////////////////////

app.get('/cities', function (req, res) {
  var options = {};
  res.type('json');

  var cityCall = function (error, data) {
    console.log("did get citiies")
    if (error) {
      console.log(error);
    } else {
      res.send(JSON.parse(data));

    }
  }

  sabre_dev_studio_flight.get('/v1/lists/supported/cities', options, cityCall);
});
// MAIN PAGE API Call----------------------------------------------------------->>>
// User subits flight information: Origin, Destination, Departure Date, Return Date

// //////////////////////////////////////////////////////////////////////////////////////////////
// // MAIN PAGE API Call----------------------------------------------------------->>>
// Retrieve city and state information for an airport code

app.post('/airport_code', function(req,res){

  var airportCode = 'NYC';

  db.airportDB.find({VENDOR_CODE: airportCode}, {'CITY_NAME': 1}, function (err, docs){
    console.log("returned city " + docs);
    res.send(docs)
  });

})
// MAIN PAGE API Call----------------------------------------------------------->>>
// User subits flight information: Origin, Destination, Departure Date, Return Date

app.post('/flights', function (req, res) {
console.log("inside the API call function...........")
  var options = {};
  var destinationThemes = {};
  var returnedTheme = [];
  var origin = req.body.origin;
  var destination = req.body.destination;
  var departuredate = req.body.departuredate;
  var returndate = req.body.returndate;
  var parentCount = 0;
  var count = 0;
  var finalResponse = [];

  var getUserChoice = function(finalResponse){

    var flightCall = function(error,data) {
        if(error) {
            console.log(error);
            res.send(0);
        } else {
            data = JSON.parse(data)
            finalResponse.push(data);
            res.json(finalResponse);
        }
    }
    // Calling the InstaFlights Search
    sabre_dev_studio_flight.get('/v1/shop/flights?origin=' + origin + '&destination=' + destination + '&departuredate=' + departuredate + '&returndate=' + returndate, options, flightCall);
    
  }

  var destinationCall = function (error, data) {
    if (error) {
      console.log(error);
      res.send(0);
    } else {
      try {

        data = JSON.parse(data);
        var responseData = [];
        if (data.FareInfo) {
          console.log("inside here")
          var fareInfo = data.FareInfo;
          if (Array.isArray(fareInfo) && fareInfo.length) {
            for (var i = 0; i < fareInfo.length; i++) {
              var currentFareInfo = fareInfo[i];
              delete currentFareInfo.Links;
              currentFareInfo.LowestFare = parseFloat(currentFareInfo.LowestFare, 10);
              responseData.push(currentFareInfo);
              console.log("count: " + i)
            }

            responseData.sort(function (a, b) {
              if (a.LowestFare < b.LowestFare) {
                return -1;
              } else if (a.LowestFare > b.LowestFare) {
                return 1;
              } else {
                return 0;
              }
            })
            console.log("------------>>>>>>>>>>>" + JSON.stringify(responseData))
            count++;
            finalResponse.push(responseData);
            if(count == parentCount){
              // res.json(finalResponse);
              getUserChoice(finalResponse);
            }
          }
        }

      }
      catch (e) {
        console.log("something Happened bad....." + e)
      }
    }
  };

// Make sure that the passed parameters are in the proper format for the MongoDB query.
  var destination = destination.toUpperCase();

  db.themes.find({airport: destination}, {'theme': 1}, function(err, docs){
    console.log('docs length: ' + docs.length)
    if (docs.length == 0) {
      console.log("no docs!!")
      res.send(0);
    } else {
      parentCount = docs.length;
      for(var i = 0 ; i < docs.length ; i++){
        (function(index){
          returnedTheme = docs[index];
          console.log(returnedTheme);
          sabre_dev_studio_flight.get('/v1/shop/flights/fares?origin=' + origin + '&theme=' + returnedTheme.theme + '&departuredate=' + departuredate + '&returndate=' + returndate, options, destinationCall);
        })(i)
      }    
    }
  });

})

app.get('/theme-airports', function (req, res) {
  var options = {};
  res.type('json');

  var getAirportThemes = function (error, data) {
    console.log('theme info....');
    if (error) {
      console.log(error);
    } else {
      var airPortThemes = {};
      airPortThemes = JSON.parse(data);
      airPortThemes = airPortThemes.Destinations[0].Destination;
      console.log(airPortThemes)
      res.send(airPortThemes);
    }
  }
  sabre_dev_studio_flight.get('/v1/lists/supported/shop/themes/BEACH', options, getAirportThemes);
});

// Choices ---------->>>>>>>>>>>>>>>>>>>>>
//////////////////////////////////////////////////////
app.get('/choices', function (req, res) {

  var options = {};
  var cityOptions = {};
  res.type('json');

  var combineResponse = {};

  var instaFlight = function (error, data) {
    console.log("instaFlight info...........");
    if (error) {
      console.log(error);
    } else {
      combineResponse.instaFlights = data;
      sabre_dev_studio_flight.get('/v1/shop/flights/fares?origin=NYC&departuredate=2015-08-25&returndate=2015-08-30&maxfare=200', options, flightCallBack);
    }
  }

  var cityCall = function (error, data) {

    console.log("did get citiies")
    if (error) {
      console.log(error);
    } else {
      combineResponse.cities = JSON.parse(data);
      sabre_dev_studio_flight.get('/v1/shop/flights?origin=dfw&destination=ord&departuredate=2015-08-01&returndate=2015-08-04', options, instaFlight);

    }
  }
  var flightCallBack = function (error, data) {
    if (error) {
      console.log("error occured");

    } else {
      combineResponse.flights = JSON.parse(data);
      // Your success handling here
      // console.log(JSON.stringify(JSON.parse(data)));

      res.send(combineResponse)
    }
  };
// I can only call 'res.send' once. So, any and all API calls that are sent back to the 
// client can only be sent back once. Given this constraint, I create an object, "combineResponse",
// and add to it as I go along. Adding to it is simple: combineResponse.##### = JSON.parse(data);
  console.log("will call cities");
  sabre_dev_studio_flight.get('/v1/lists/supported/cities', options, cityCall);

});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  res.status = ('404');
  res.render('404');
});


// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

app.get('/theme-airports', function (req, res) {
  var options = {};
  res.type('json');

  var getAirportThemes = function (error, data) {
    console.log('theme info....');
    if (error) {
      console.log(error);
    } else {
      var airPortThemes = {};
      airPortThemes = JSON.parse(data);
      airPortThemes = airPortThemes.Destinations[0].Destination;
      console.log(airPortThemes)
      res.send(airPortThemes);
    }
  }
  sabre_dev_studio_flight.get('/v1/lists/supported/shop/themes/BEACH', options, getAirportThemes);
});

// Choices ---------->>>>>>>>>>>>>>>>>>>>>


// app.get('/choices', function (req, res) {

//   var options = {};
//   var cityOptions = {};
//   res.type('json');

//   var combineResponse = {};

//   var instaFlight = function (error, data) {
//     console.log("instaFlight info...........");
//     if (error) {
//       console.log(error);
//     } else {
//       combineResponse.instaFlights = data;
//       sabre_dev_studio_flight.get('/v1/shop/flights/fares?origin=NYC&departuredate=2015-08-25&returndate=2015-08-30&maxfare=200', options, flightCallBack);
//     }
//   }

//   var cityCall = function (error, data) {

//     console.log("did get citiies")
//     if (error) {
//       console.log(error);
//     } else {
//       combineResponse.cities = JSON.parse(data);
//       sabre_dev_studio_flight.get('/v1/shop/flights?origin=dfw&destination=ord&departuredate=2015-08-01&returndate=2015-08-04', options, instaFlight);

//     }
//   }
//   var flightCallBack = function (error, data) {
//     if (error) {
//       console.log("error occured");

//     } else {
//       combineResponse.flights = JSON.parse(data);
      // Your success handling here
      // console.log(JSON.stringify(JSON.parse(data)));

  //     res.send(combineResponse)
  //   }
  // };
// I can only call 'res.send' once. So, any and all API calls that are sent back to the 
// client can only be sent back once. Given this constraint, I create an object, "combineResponse",
// and add to it as I go along. Adding to it is simple: combineResponse.##### = JSON.parse(data);
//   console.log("will call cities");
//   sabre_dev_studio_flight.get('/v1/lists/supported/cities', options, cityCall);

// });

module.exports = app;
