/*global require */
var path = require( 'path' );
var assert = require('chai').assert;
var Post = require( path.join( __dirname, '..', 'models', 'post' ) );

describe('Post', function () {
  describe( '#constructor', function(){
    it('should create a new Post', function () {
      var options = {
        id: 1,
        date: "2015-02-27T04:56:23.757Z",
        title: "Hi",
        body: "Howdy"
      };
      var p = new Post(options);
      assert.equal( p.id, 1, "Id should be 1" );
      assert.equal( p.date.toString(), (new Date( options.date )).toString(), "Date should match a date object created with ISO date" );
    });
  });

  describe( '#getAll', function(){
    it('should get all Posts', function (done) {
      Post.getAll(function( posts ){
        var p = posts[0];
        assert.equal( p.id, 1, "Id should be 1" );
        done();
      });
    });
  });
});
