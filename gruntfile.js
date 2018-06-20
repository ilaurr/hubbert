module.exports = function(grunt) {

    grunt.initConfig({
      browserify: {
          ui: {
            files: {
                'public/js/app.js': ['ui/js/app.js']
            },
            options: {
                transform: ['vueify']
            }
        }
      },
      copy: {
          client: {
            files: [
                {
                    expand: true,
                    cwd: 'ui/images',
                    src: ['*'],
                    dest: 'public/images'
                },
                {
                    expand: true,
                    cwd: 'ui/',
                    src: ['*.html'],
                    dest: 'public'   
                }
            ]
        }
      },   
      less: {
          index: {
            files: {
                'public/css/style.css': 'ui/stylesheets/style.less'
            }
          }
      }
    });
  
    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.registerTask('default', ['browserify', 'less', 'copy']);
  
  };