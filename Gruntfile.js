'use strict';

module.exports = function(grunt) {
  // Project Configuration
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    nodemon: {
      dev: {
        script: 'app.js',
        options: {
          args: [],
          ignore: ['public/**', 'node_modules/**'],
          ext: 'js, html',
          nodeArgs: ['--debug'],
          delayTime: 1,
          env: {
            PORT: 3000
          },
          cwd: __dirname
        }
      }
    },
    concurrent: {
      tasks: ['nodemon'],
      options: {
        logConcurrentOutput: true
      }
    },
  });

  // Load NPM tasks.
  grunt.loadNpmTasks('grunt-nodemon');
  grunt.loadNpmTasks('grunt-concurrent');

  // Add default tasks.
  grunt.registerTask('default', ['concurrent']);
}
