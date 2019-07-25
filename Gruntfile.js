module.exports = function(grunt){
  // grunt stuff
  grunt.initConfig({
    // grunt configuration settings
    sass: {
      dist: {
        files: {
          // key : value
          // destination : source
          'css/style.css' : 'scss/style.scss'
        }
      }
    },
    cssmin: {
      target: {
        files: [{
          expand: true,
          cwd: 'css/', // source (current working directory)
          src: ['*.css', '!*.min.css'], // any .css file, and any not-.min.css file. Doing this prevents infinite loop, in which we do .css then .min.css then .css again ...
          dest: 'css/',
          ext: '.min.css'
        }]
      }
    },
    watch: {
      sass: {
        files: ['scss/*.scss'], // i.e. **all** of our Sass dependencies
        tasks: ['sass' , 'cssmin'] // when <files> change, do <tasks>
      }
      // we could add js: { ... }, images { ... }, heaps of stuff
    }
  });

  //grunt.loadNpmTasks();
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');



  //grunt.registerTasks();

  // these can't share a name with a grunt task defined earlier.
  // so no 'watch', 'cssmin' etc
  grunt.registerTask('compile' , ['sass']);
  grunt.registerTask('min' , ['cssmin']);
  grunt.registerTask('all' , ['sass', 'cssmin']);
  grunt.registerTask('default', ['watch']); // ie. 'grunt' and nothing else
};
