module.exports = function (grunt) {
  grunt.config.init ({
    cssmin: {
      target: {
	files: [{
	  expand: true,
	  src: ['css/*.css', '!*.min.css'],
	  dest: 'gen',
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
	src: ['css/*.css']
      }
    },
    concat: {
      dist: {
      src: ['gen/css/*.css'],
      dest: 'public/res/css/styles.min.css',
    },
    }

  });

  grunt.loadNpmTasks ('grunt-contrib-cssmin');
  grunt.loadNpmTasks ('grunt-contrib-concat');
  grunt.loadNpmTasks ('grunt-contrib-csslint');
  grunt.registerTask ('default', ['csslint']);
};
