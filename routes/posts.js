var path = require( 'path' );
var express = require('express');
var ejs = require( 'ejs' );

var router = express.Router();
var Post = require( path.join( __dirname, "..", "models", "post" ) );

/* GET users listing. */
router.get('/', function(req, res, next) {
  Post.getAll(function(posts){
    res.render( "posts/index", { title: "Posts", posts: posts } );
  });
});

module.exports = router;
