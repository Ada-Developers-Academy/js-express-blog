var path = require( 'path' );
var fs = require( 'fs' );

var Post = function(opts){
  this.id = opts.id;
  this.date = new Date( opts.date );
  this.title = opts.title;
  this.body = opts.body;
};

Post.getAll = function(cb){
  fs.readFile( path.join( __dirname, "..", "db", "posts.json" ), function( err, data ){
    var postData = JSON.parse( data.toString( "utf-8" ) );
    cb(postData.map(function( pd ){
      return new Post( pd );
    }));
  });
};

module.exports = Post;
