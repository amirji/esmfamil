// Generated by CoffeeScript 1.7.1
(function() {
  module.exports = function(grunt) {
    var fs, isModified;
    fs = require('fs');
    isModified = function(filepath) {
      var modified, now;
      now = new Date();
      modified = fs.statSync(filepath).mtime;
      return (now - modified) < 10000;
    };
    grunt.initConfig({
      coffee: {
        options: {
          sourceMap: true,
          bare: true,
          force: true
        },
        all: {
          expand: true,
          cwd: 'src/coffeescript/',
          src: '**/*.coffee',
          dest: 'public/js/compiled',
          ext: '.js'
        },
        modified: {
          expand: true,
          cwd: 'src/coffeescript/',
          src: '**/*.coffee',
          dest: 'public/js/compiled',
          ext: '.js',
          filter: isModified
        }
      },
      coffeelint: {
        options: {
          force: true
        },
        all: {
          expand: true,
          cwd: 'src/coffeescript/',
          src: '**/*.coffee'
        },
        modified: {
          expand: true,
          cwd: 'src/coffeescript/',
          src: '**/*.coffee',
          filter: isModified
        }
      },
      watch: {
        coffeescript: {
          files: ['src/**/*.coffee'],
          tasks: ['coffeelint:modified', 'coffee:modified']
        }
      }
    });
    grunt.loadNpmTasks('grunt-coffeelint');
    grunt.loadNpmTasks('grunt-contrib-coffee');
    grunt.loadNpmTasks('grunt-contrib-watch');
    return grunt.registerTask('default', ['coffeelint:all', 'coffee:all', 'watch']);
  };

}).call(this);
