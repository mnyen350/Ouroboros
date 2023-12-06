require('dotenv').config()
//console.log(process.env);

const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');

const indexRouter = require('./routes/index.routes');
const userRouter = require('./routes/api.user.routes');
const ticketRouter = require('./routes/api.ticket.routes');
const authRouter = require('./routes/auth.routes');

const app = express();

app.use(cors({ 
  origin: ["http://localhost:3000", "http://localhost:3001", "http://ec2-3-23-129-208.us-east-2.compute.amazonaws.com", "*"],
  credentials: true
}));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/users', userRouter);
app.use('/api/tickets', ticketRouter);
app.use('/auth', authRouter);
app.use('/', indexRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
