var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/api/v1/users');
var sessionsRouter = require('./routes/api/v1/sessions')
var forecastRouter = require('./routes/api/v1/forecast')
var dbForecastRouter = require('./routes/api/v1/dbforecast')
var favoritesRouter = require('./routes/api/v1/favorites')
var dbFavoritesRouter = require('./routes/api/v1/dbfavorites')

var app = express();

var pg = require('pg')

var connection = pg.createConnection({
  host: process.env.RDS_HOSTNAME,
  user: process.env.RDS_USERNAME,
  password: process.env.RDS_PASSWORD,
  port: process.env.RDS_PORT
});

connection.connect(function(err) {
  if (err) {
    console.error('Database connection failed: ' + err.stack);
    return;
  }
  console.log('Connected to database.')
});

connection.end();




app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/api/v1/users', usersRouter);
app.use('/api/v1/sessions', sessionsRouter);
app.use('/api/v1/forecast', forecastRouter);
app.use('/api/v1/favorites', favoritesRouter);
app.use('/api/v1/dbfavorites', dbFavoritesRouter);
app.use('/api/v1/dbforecast', dbForecastRouter);

module.exports = app;
