module.exports = function (grunt) {

    grunt.initConfig({
        paths: {
            checkout: 'C:/inetpub/wwwroot/Rakuten/Repository/Rakuten.Shopping/Resources/Rakuten.Resources.Web/css/checkout'            
        },
    });

    // Load per-task config from separate files.
    grunt.loadTasks('grunt_tasks');

    grunt.registerTask('w', ['watch']);

};