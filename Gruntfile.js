var path = require('path');

function renameCopyPath(dest, matchedSrcPath, options){
	matchedSrcPath = matchedSrcPath.replace(options.replacement, '');
	return path.join(dest, matchedSrcPath);
}

module.exports = function(grunt) {

  // Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		watch: {
			css: {
				files: [
					'src/sass/*.scss',
					'src/sass/libs/*.scss',
				],
				tasks: ['compass']
			},
			js: {
				files: [
					'src/js/*.js'
				],
				tasks: ['jshint', 'uglify']
			},
			html: {
				files: [
					'src/html/**'
				],
				tasks: ['copy:html']
			},
			php: {
				files: [
					'src/php/**'
				],
				tasks: ['copy:php']
			},
			images: {
				files: [
					'src/images/**'
				],
				tasks: ['copy:images']
			},
			fonts: {
				files: [
					'src/fonts/**'
				],
				tasks: ['copy:fonts']
			}
		},

		compass: {
			dist: {
				options: {
					cacheDir: 'src/sass/.sass-cache',
					sassDir: 'src/sass/',
					cssDir: 'dist/css/',
					outputStyle: 'compressed'
				}
			}
		},

		concat: {
			js: {
				options: {
					separator: ';\n'
				},
				files: {
					'src/js/libs.js':[
						'bower_components/jquery/dist/jquery.min.js',
            			'bower_components/bootstrap/dist/js/bootstrap.min.js',
            			'bower_components/OwlCarouselBower/owl-carousel/owl.carousel.min.js',
            			'bower_components/retina.js/dist/retina.min.js'
					]
				}
			},
			css: {
				options: {
					separator: '\n'
				},
				files: {
					'src/sass/_libs.scss':[
						'bower_components/bootstrap/dist/css/bootstrap.min.css',
						'bower_components/components-font-awesome/css/font-awesome.min.css',
						'bower_components/OwlCarouselBower/owl-carousel/owl.carousel.css'
					]
				}
			}
		},

		uglify: {
			scripts: {
				files: {
					'dist/js/scripts.js': [
						'src/js/libs.js', 
						'src/js/main.js'
					]
				}
			}
		},

		jshint: {
			validate: {
				files:{
					src:[
						'src/js/main.js'
					],
				}
			}
		},

		copy: {
			images: {
				files:[
					{
						expand: true,
						src: ['src/images/**'],
						replacement: 'src/images/',
						dest: 'dist/images/',
						filter: 'isFile',
						rename: renameCopyPath
					},
					{
						expand: true,
						src: ['bower_components/OwlCarouselBower/owl-carousel/*.png'],
						replacement: 'bower_components/OwlCarouselBower/owl-carousel/',
						dest: 'dist/css/',
						filter: 'isFile',
						rename: renameCopyPath
					}
				]
			},
			fonts: {
				files:[
					{
						expand: true,
						src: ['src/fonts/**'],
						replacement: 'src/fonts/',
						dest: 'dist/fonts/',
						filter: 'isFile',
						rename: renameCopyPath
					},
					{
						expand: true,
						src: ['bower_components/bootstrap/dist/fonts/**'],
						replacement: 'bower_components/bootstrap/dist/fonts/',
						dest: 'dist/fonts/',
						filter: 'isFile',
						rename: renameCopyPath
					},
					{
						expand: true,
						src: ['bower_components/components-font-awesome/fonts/**'],
						replacement: 'bower_components/components-font-awesome/fonts/',
						dest: 'dist/fonts/',
						filter: 'isFile',
						rename: renameCopyPath
					}
				]
			},
			html: {
				files:[
					{
						expand: true,
						src: ['src/html/**'],
						replacement: 'src/html/',
						dest: 'dist/',
						filter: 'isFile',
						rename: renameCopyPath
					} 
				]
			},
			php: {
				files:[
					{
						expand: true,
						src: ['src/php/**'],
						replacement: 'src/php/',
						dest: 'dist/',
						filter: 'isFile',
						rename: renameCopyPath
					} 
				]
			}
		}
		
	});

	// Load the Grunt plugins.
  	grunt.loadNpmTasks('grunt-contrib-concat');
  	grunt.loadNpmTasks('grunt-contrib-copy');
  	grunt.loadNpmTasks('grunt-contrib-jshint');
  	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-contrib-watch');

	// Register the default tasks.
	grunt.registerTask('default', ['concat', 'compass', 'jshint', 'uglify', 'copy', 'watch']);
};