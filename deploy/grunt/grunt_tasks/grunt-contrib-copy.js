module.exports = function (grunt) {

    grunt.config('copy', {
        // Mover um ou mais componentes para o R
        css_login_to_project: {
            expand: true,
            cwd: '../../dist/css/',
            src: ['login.css'],
            dest: '<%=paths.checkout%>'
        },
        
    });
    

    grunt.loadNpmTasks('grunt-contrib-copy-force');

};
