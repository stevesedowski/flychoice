"use strict";
// var mongo_uri = process.env.MONGOLAB_URI || "";
var mongo_uri = process.env.MONGOLAB_URI || "mongodb://localhost/themes";
console.log("uri: " + mongo_uri)
var express = require('express');
var mongojs = require('mongojs');
var mongodb = require('mongodb');
// create object of mongojs type, with the database name of: "themes", and collection name of "themes"
// var db = mongojs('themes', ['themes']);
var db = mongojs(mongo_uri, ['themes']);

// var SabreDev = require('sabre-dev-studio');
// var sabre_dev_studio_flight = new SabreDev({
//   client_id: 'V1:rf5z8cicozn8brnz:DEVCENTER:EXT',
//   client_secret: 'FVxf52iE',
//   uri: 'https://api.test.sabre.com'
//   client_id: 'V1:141414:3YAB:AA',
//   client_secret: 'dev2015',
//   uri: 'https://api.sabre.com'
// });

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

  // db.themes.find(function (err, docs){
  //   console.log(docs);
  //   res.json(docs);NYC
  // })
  db.themes.find({airport: 'NYC'}, {'theme': 1}, function (err, docs) {
    console.log("Returned info for the themes page: " + docs);
    res.json(docs);
  })
  // sabre_dev_studio_flight.get('/v1/lists/supported/shop/themes/',options,themeCall);
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

"use strict";

var express = require('express');
var mongojs = require('mongojs');
// create object of mongojs type, with the database name of: "themes", and collection name of "themes"
// var db = mongojs('themes', ['themes']);
var db = mongojs(mongo_uri, ['themes']);

var SabreDev = require('sabre-dev-studio');
var sabre_dev_studio_flight = new SabreDev({
  client_id: 'V1:rf5z8cicozn8brnz:DEVCENTER:EXT',
  client_secret: 'FVxf52iE',
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

  // db.themes.find(function (err, docs){
  //   console.log(docs);
  //   res.json(docs);NYC
  // })
  db.themes.find({airport: 'NYC'}, {'theme': 1}, function (err, docs) {
    console.log("Returned info for the themes page: " + docs);
    res.json(docs);
  })
  // sabre_dev_studio_flight.get('/v1/lists/supported/shop/themes/',options,themeCall);
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
// // MAIN PAGE API Call----------------------------------------------------------->>>
// Retrieve city and state information for an airport code

app.post('/airport_code', function(req,res){
  // var airportCode = req.body.airport_code;
  var airportCode = 'NYC';
  // res.send("code: " + airportCode)

  // db.themes.find({airport: 'NYC'}, {'theme': 1}, function (err, docs) {
  //   console.log("Returned info for the themes page: " + docs);
  //   res.json(docs);
  // })

  db.airportDB.find({VENDOR_CODE: airportCode}, {'CITY_NAME': 1}, function (err, docs){
    console.log("returned city " + docs);
    res.send(docs)
  });
  // db.airportDB.find({VENDOR_CODE: airportCode}, function(err, docs){
  //   airportInfo = docs;
  // });
  // res.send('airportInfo')
  // res.json(airportInfo);
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
    sabre_dev_studio_flight.get('/v1/shop/flights?origin=' + origin + '&destination=' + destination + '&departuredate=' + departuredate + '&returndate=' + returndate, options, flightCall);
    
    // res.json(finalResponse)
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

// See what themes, if any, are associated with a city.
  // db.themes.find({airport: destination}, {'theme':1}).toArray(function(error, array) {
  //     for(var i = 0 ; i < array.length ; i++){
  //       returnedTheme = array[i];
  //       sabre_dev_studio_flight.get('/v1/shop/flights/fares?origin=' + origin + '&theme=' + returnedTheme.theme + '&departuredate=' + departuredate + '&returndate=' + returndate, options, destinationCall);
  //     }
  //   })
  


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


  //themeCursor.on('data', function (doc) {
  //  // call API only when a theme is found
  //  if (doc.theme) {
  //    sabre_dev_studio_flight.get('/v1/shop/flights/fares?origin=' + origin + '&theme=' + doc.theme + '&departuredate=' + departuredate + '&returndate=' + returndate, options, destinationCall);
  //  }
  //});
  //themeCursor.on('close', function(){
  //  res.json(finalResponse);
  //});




  // var flightCall = function(error,data) {
  //     if(error) {
  //         console.log(error);
  //     } else {
  //         console.log("data: " + data);
  //         res.send(JSON.parse(data));
  //     }
  // }
  // sabre_dev_studio_flight.get('/v1/shop/flights?origin=' + origin + '&destination=' + destination + '&departuredate=' + departuredate + '&returndate=' + returndate, options, flightCall);
})

// app.get('/flights', function(req,res){
//   console.log(req.body.origin);
//   console.log(req.body.destination);
//   console.log(req.body.departuredate);
//   console.log(req.body.returndate);

//   var options = {};
//   res.type('json');
//   var origin = req.query.origin;
//   var destination = req.query.destination;
//   var departuredate = req.query.departuredate;
//   var returndate = req.query.returndate;

//   var flightCall = function(error,data) {
//       console.log("did get flights---------->>>>>>>>>>>")
//       console.log("origin: " + origin)
//       if(error) {
//           console.log(error);
//       } else {
//           console.log("data: " + data);
//           res.send(JSON.parse(data));
//       }
//   }
//   sabre_dev_studio_flight.get('/v1/shop/flights?origin=' + origin + '&destination=' + destination + '&departuredate=' + departuredate + '&returndate=' + returndate, options, flightCall);

// })

// app.get('/flights/:origin/:destination/:departuredate/:returndate', function(req, res){
//   app.get('/flights', function(req, res){
//     var options = {};
//     res.type('json');
//     var origin = req.params.origin;
//     var destination = req.params.destination;
//     var departuredate = req.params.departuredate;
//     var returndate = req.params.returndate;
//     console.log("origin: " + origin + " | destination: " + destination + " depart: " + departuredate + "return: " + returndate)
//   var flightCall = function(error,data) {
//       console.log("did get flights---------->>>>>>>>>>>")
//       if(error) {
//           console.log(error);
//       } else {
//           res.send(JSON.parse(data));

//       }
//   }
//   sabre_dev_studio_flight.get('/v1/shop/flights?origin=' + origin + '&destination=' + destination + '&departuredate=' + departuredate + '&returndate=' + returndate);
// });
// Below is for the lead price calendar. Lead Price Calendar is for when the traveler is open to dates but has length of stay information.
//sabre_dev_studio_flight.get('/v1/shop/flights/fares?origin=dfw&departuredate=2015-08-25&returndate=2015-08-30', options, flightCall);
//sabre_dev_studio_flight.get('/v1/shop/flights/fares?origin=' + origin + '&destination=' + destination + 'departuredate=2015-08-25&returndate=2015-08-30', options, flightCall);

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


// var returned_theme = db.themes.find({airport: 'ORL'}, {'theme': 1}).toArray();
//var returned_theme = {};
//returned_theme = db.themes.find({airport: destination}, {'theme': 1});
// var temp = db.themes.find({airport: 'ORL'}, {'theme':1});
// console.log("returned theme with temp variable: " + typeof(returned_theme))
// db.themes.find({airport: 'ORL'}, {'theme':1}, function(err,docs){
//   console.log("Returned info: " + docs);
//   // res.json(docs);
// });
// db.themes.find({airport: 'destination'}, {'theme': 1}, function(err,docs){
//   console.log("This was returned: " + docs.countasfasdfsf);
// })


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


//sabre_dev_studio_flight.get('/v1/shop/flights?origin=dfw&destination=ord&departuredate=2015-08-01&returndate=2015-08-04',options,callback);

  //sabre_dev_studio_flight.get('/v1/lists/supported/cities', options, callback);

  //sabre_dev_studio_flight.get('/v1/lists/supported/shop/themes/MOUNTAINS',themes,showATheme);

  //sabre_dev_studio_flight.get('/v1/lists/supported/shop/themes/',options,themes);

});

app.get('/fare-forecast', function (req, res) {

  var option = {};
  res.type('text/plain');
  res.send('Fare Forecast');

  var somethingHappened = function (error, data) {
    if (error) {
      console.log("error in finding low fare information has occurred....");
    } else {
      var info = {};
      info = JSON.parse(data);
      res.type('json');
      res.send(info);
    }
  };
  // sabre_dev_studio_flight.get('/v1/forecast/flights/fares?origin=dal&destination=lga&departuredate=2015-08-08&returndate=2015-08-10',option,somethingHappened);
})
//

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

module.exports = app;


// app.get('/flights', function(req,res){
//   console.log(req.body.origin);
//   console.log(req.body.destination);
//   console.log(req.body.departuredate);
//   console.log(req.body.returndate);

//   var options = {};
//   res.type('json');
//   var origin = req.query.origin;
//   var destination = req.query.destination;
//   var departuredate = req.query.departuredate;
//   var returndate = req.query.returndate;

//   var flightCall = function(error,data) {
//       console.log("did get flights---------->>>>>>>>>>>")
//       console.log("origin: " + origin)
//       if(error) {
//           console.log(error);
//       } else {
//           console.log("data: " + data);
//           res.send(JSON.parse(data));
//       }
//   }
//   sabre_dev_studio_flight.get('/v1/shop/flights?origin=' + origin + '&destination=' + destination + '&departuredate=' + departuredate + '&returndate=' + returndate, options, flightCall);

// })

// app.get('/flights/:origin/:destination/:departuredate/:returndate', function(req, res){
//   app.get('/flights', function(req, res){
//     var options = {};
//     res.type('json');
//     var origin = req.params.origin;
//     var destination = req.params.destination;
//     var departuredate = req.params.departuredate;
//     var returndate = req.params.returndate;
//     console.log("origin: " + origin + " | destination: " + destination + " depart: " + departuredate + "return: " + returndate)
//   var flightCall = function(error,data) {
//       console.log("did get flights---------->>>>>>>>>>>")
//       if(error) {
//           console.log(error);
//       } else {
//           res.send(JSON.parse(data));

//       }
//   }
//   sabre_dev_studio_flight.get('/v1/shop/flights?origin=' + origin + '&destination=' + destination + '&departuredate=' + departuredate + '&returndate=' + returndate);
// });
// Below is for the lead price calendar. Lead Price Calendar is for when the traveler is open to dates but has length of stay information.
//sabre_dev_studio_flight.get('/v1/shop/flights/fares?origin=dfw&departuredate=2015-08-25&returndate=2015-08-30', options, flightCall);
//sabre_dev_studio_flight.get('/v1/shop/flights/fares?origin=' + origin + '&destination=' + destination + 'departuredate=2015-08-25&returndate=2015-08-30', options, flightCall);

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


// var returned_theme = db.themes.find({airport: 'ORL'}, {'theme': 1}).toArray();
//var returned_theme = {};
//returned_theme = db.themes.find({airport: destination}, {'theme': 1});
// var temp = db.themes.find({airport: 'ORL'}, {'theme':1});
// console.log("returned theme with temp variable: " + typeof(returned_theme))
// db.themes.find({airport: 'ORL'}, {'theme':1}, function(err,docs){
//   console.log("Returned info: " + docs);
//   // res.json(docs);
// });
// db.themes.find({airport: 'destination'}, {'theme': 1}, function(err,docs){
//   console.log("This was returned: " + docs.countasfasdfsf);
// })


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


//sabre_dev_studio_flight.get('/v1/shop/flights?origin=dfw&destination=ord&departuredate=2015-08-01&returndate=2015-08-04',options,callback);

  //sabre_dev_studio_flight.get('/v1/lists/supported/cities', options, callback);

  //sabre_dev_studio_flight.get('/v1/lists/supported/shop/themes/MOUNTAINS',themes,showATheme);

  //sabre_dev_studio_flight.get('/v1/lists/supported/shop/themes/',options,themes);

});

app.get('/fare-forecast', function (req, res) {

  var option = {};
  res.type('text/plain');
  res.send('Fare Forecast');

  var somethingHappened = function (error, data) {
    if (error) {
      console.log("error in finding low fare information has occurred....");
    } else {
      var info = {};
      info = JSON.parse(data);
      res.type('json');
      res.send(info);
    }
  };
  // sabre_dev_studio_flight.get('/v1/forecast/flights/fares?origin=dal&destination=lga&departuredate=2015-08-08&returndate=2015-08-10',option,somethingHappened);
})
//

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

module.exports = app;
