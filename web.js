
// Simulating environment variables in .env files for production
require("dotenv").config();

const keystone = require("keystone");
const hbs = require("express-handlebars");

keystone.init({

  "name" : "Name of website",

  "views" : "templates/views",
  "custom engine" : hbs({
    defaultLayout : "base",
    layoutsDir : "templates/layouts",
    partialsDir : "templates/partials",

    // defining helpers for templates
    helpers: {    }
  }),

  "view engine" : "handlebars",

  "static" : "public",

  "mongo" : process.env.MONGO_URI,
  "auth" : true,
  "user model" : "User",

  "auto update" : true,

  "cookie secret" : process.env.COOKIE_SECRET,
  "session store" : "mongo",

  //"cloudinary config" : process.env.CLOUDINARY_URI,

  "port" : process.env.PORT || "3000",
  "host" : process.env.IP || "0.0.0.0" // for testing on mobile locally

});

const models = require("./models");

keystone.set("routes", require("./routes"));

keystone.start();
