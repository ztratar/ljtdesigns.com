module.exports = function(grunt) {

	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.initConfig({
		less: {
			main: {
				files: {
					'css/main.css': [
						'bower_components/bootstrap/less/bootstrap.less',
						'less/main.less'
					]
				}
			}
		},
		uglify: {
			main: {
				files: {
					'js/main.min.js': [
						'bower_components/jquery/dist/jquery.js',
						'bower_components/bootstrap/js/collapse.js',
						'js/main.js'
					]
				}
			}
		},
		watch: {
			css: {
				files: ['less/**'],
				tasks: 'less'
			}
		}
	});

	grunt.registerTask('default', ['less', 'uglify']);

};
