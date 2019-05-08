'use strict'

const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const registerRoute = require('./routes/register');
const userRoute = require('./routes/users');
const indexRoute = require('./routes/index');
const loginRoute = require('./routes/login');
const bcrypt = require('bcryptjs');
const knex = require('./database/knex');

const User = require('./database/models/users');
const gallery = require('./database/models/gallery');
const guard = require('./middleware/guard');

const app = express();
const PORT = 3000;
const saltRounds = 12;

app.use(express.static('public'));
app.engine('.hbs', exphbs({ extname: '.hbs' }));
app.set('view engine', '.hbs');
app.set('views', 'views/templates');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(session({ secret: 'keyboard cat' }));
app.use(passport.initialize());
app.use(passport.session());
app.use('/register', registerRoute);
app.use('templates/user', userRoute);
app.use('/', indexRoute);

passport.use(
  new LocalStrategy((username, password, done) => {
    return new User({ username: username })
      .fetch()
      .then((user) => {
        console.log(user);

        if (user === null) {
          return done(null, false, { message: 'Invalid Credentials' });
        } else {
          user = user.toJSON();

          bcrypt.compare(password, user.password).then((res) => {
            //Happy route: username exists, password matches
            if (user.password === password) {
              return done(null, user);
            }
            //Error route: Username exists, password does not match
            else {
              return done(null, false, { message: 'bad username or password' });
            }
          });
        }
      })
      .catch((err) => {
        console.log('error ', err);
        return done(err);
      });
  }),
);

passport.serializeUser(function(user, done) {
  console.log('serializing');
  return done(null, user);
});

passport.deserializeUser(function(user, done) {
  console.log('deserializing');
  console.log(user);
  done(null, user);
});

app.get('/', (req, res) => {
  res.render('index.hbs');
});

app.get('/smoke', (req, res) => {
  console.log('In smoke route');
  console.log(req.user);
  console.log(req.isAuthenticated());
  return res.send('smoke test.');
});

app.get('/secret', guard, (req, res) => {
  return res.send('You found 17!');
});

app.use('/login', loginRoute);

app.use(
  '/login',
  passport.authenticate('local', {
    successRedirect: '/secret',
    failureRedirect: '/login',
  }),
);

app.post('/register.html', (req, res) => {
  bcrypt.genSalt(saltRounds, (err, res) => {
    if (err) {
      return 500;
    }

    bcrypt.hash(req.body.password, salt, (err, hash) => {
      if (err) {
        return 500;
      }

      return new User({
        username: req.body.username,
        password: req.body.password,
      })
        .save()
        .then((user) => {
          console.log(user);
          return res.redirect('/login.html');
        })
        .catch((err) => {
          console.log(err);
          return res.send('Error creating account');
        });
    });
  });
});


app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}.`);
});
