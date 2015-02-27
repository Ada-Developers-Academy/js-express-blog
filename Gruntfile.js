module.exports = function(grunt) {

  grunt.initConfig({

    simplemocha: {
      options: {
	      globals: ['should'],
	      timeout: 3000,
	      ignoreLeaks: false,
	      ui: 'bdd',
	      reporter: 'tap'
      },

      all: { src: ['test/**/*.js'] }
    },

    jshint: {
      options: {
        jshintrc: true
      }
    }
  });

  grunt.loadNpmTasks('grunt-simple-mocha');
  grunt.loadNpmTasks('grunt-contrib-jshint');


  grunt.registerTask('test', [
    'simplemocha'
  ]);

  grunt.registerTask('default', [
    'jshint',
    'simplemocha'
  ]);
};
