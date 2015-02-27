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
      assert.equal( p.title, "Hi", "Title should match" );
      assert.equal( p.body, "Howdy", "Body should match" );
      assert.equal( p.date.toString(), (new Date( options.date )).toString(), "Date should match a date object created with ISO date" );
    });
  });

  describe( '#all', function(){
    it('should get all Posts', function ( done ) {
      var d = new Date("2015-02-27T04:19:05.293Z");
      Post.all(function( err, posts ){
        if( err ){
          assert.ok( false, "Error thrown: " + err.stack );
        }
        var p = posts[0];
        assert.equal( p.id, 1, "Id should be 1" );
        assert.equal( p.title, "My first post", "Id should be 1" );
        assert.equal( p.date.toString(), d.toString(), "Date should match first element" );
        assert.equal( p.body, "This is my first post and I'm pretty excited", "Body should match" );
        done();
      });
    });
  });

  describe( '#find', function(){
    it( 'should find post by id', function( done ){
      Post.find( 2, function( posts ){
        var p = posts[0];
        assert.equal( p.id, 2, "Id should be 2" );
        done();
      });
    });
  });

});
