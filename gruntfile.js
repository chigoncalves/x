module.exports = function (grunt) {
  grunt.config.init ({
    cssmin: {
      target: {
	files: [{
	  expand: true,
	  src: ['css/*.css', '!*.min.css'],
	  dest: 'bar',
	  ext: '.min.css'
	}]
      }
    },
    csslint: {
      strict: {
	options: {
	  import: 2,
	  formatters: ['compact'],
	  csslintrc: '.csslintrc',
	},
	src: ['*.css']
      }
    },
    concat: {
      dist: {
      src: ['*.css'],
      dest: 'cache/styles.concat.css',
    },
    }

  });

  grunt.loadNpmTasks ('grunt-contrib-cssmin');
  grunt.loadNpmTasks ('grunt-contrib-concat');
  grunt.loadNpmTasks ('grunt-contrib-csslint');
  grunt.registerTask ('default', ['csslint']);
};
