# js-express-blog

A simple express blog, except no DB, just a flat file to read from

## Install

```
$ npm install -g grunt-cli
$ git clone git@github.com:Ada-Developers-Academy/js-express-blog.git
$ cd js-express-blog
$ npm install
```

## Project Structure

```
js-express-blog/
  |_ bin/         <- runnable scripts to start app
  |_ db/          <- flat file storage
  |_ lib/         <- non-npm modules to be used
  |_ models/      <- models
  |_ public/      <- assets folder
  |_ routes/      <- controller files
  |_ test/        <- tests
  |_ views/       <- views for the project
  |_ app.js       <- entry point to JS (use requires here to pull in other files)
  |_ Gruntfile.js <- grunt configuration
  |_ package.json <- npm packages
```

## Run Tests

Tests are run by mocha via grunt. All tests in test/ will be executed.

```
$ npm test
```

## Start Server

```
$ npm start
```

## Help

```
$ grunt --help
```

This will list the available tasks.

## Goals

1. Understand structure of express applications
2. Make initial Post tests pass
3. Add comments to posts - how should they associate?
4. Style how you see fit!
