module.exports = function(grunt) {

	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.initConfig({
		less: {
			main: {
				options: {
					compress: true,
					cleancss: true,
					optimization: 2
				},
				files: {
					'css/main.css': [
						'bower_components/bootstrap/less/bootstrap.less',
						'libs/slick/slick.css',
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
						'libs/lazyload.js',
						'libs/share.min.js',
						'libs/slick/slick.js',
						'js/main.js'
					]
				}
			}
		},
		watch: {
			css: {
				files: ['less/**'],
				tasks: 'less'
			},
			js: {
				files: ['js/**'],
				tasks: 'uglify'
			}
		}
	});

	grunt.registerTask('default', ['less', 'uglify']);

};
