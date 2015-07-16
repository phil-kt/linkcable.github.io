var initGruntConfig = require('./config/grunt/config');

module.exports = function (grunt) {
    var config = { pkg: grunt.file.readJSON('package.json'), root: true};
    initGruntConfig(grunt, __dirname, config);

    grunt.registerTask('installnpm', [
        'shell:npmInstall'
    ]);

    grunt.registerTask('compile', [
        'sass:compile',
        'browserify:compile',
        'copy:browser'
    ]);

    grunt.registerTask('build', [
        'uglify:deploy',
        'htmlrefs:deploy',
        'copy:deploy'
    ]);

    /* Watch task that bundles(browserify) on the fly as you make changes to files */
    grunt.registerTask('watchify', [
        'watch:scripts',
        'watch:less'
    ]);

    /* Nginx Tasks */
    grunt.registerTask('restart', [
        'shell:testNginx',
        'shell:testPkill',
        'shell:startNginx'
    ]);

    grunt.registerTask('stop', [
        'shell:testPkill',
        'shell:rmSymLink',
        'shell:stopNginx'
    ]);

    /* Default task that compiles everything for dev */
    grunt.registerTask('default', [
        'installnpm',
        'compile',
        'jshint',
        'test'
    ]);

};