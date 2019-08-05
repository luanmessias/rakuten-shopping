module.exports = function (grunt) {

    grunt.config('copy', {
        // Mover um ou mais componentes para o R
        css_to_project_checkout: {
            expand: true,
            cwd: '../../dist/css/',
            src: ['nrk_basket.css', 'login.css', 'login.css.map', 'nrk_checkout.css', 'nrk_checkout.css.map'],
            dest: '<%=paths.checkout%>'
        },
        css_to_project_account: {
            expand: true,
            cwd: '../../dist/css/',
            src: ['myacc.css'],
            dest: '<%=paths.account%>'
        },
        
    });
    

    grunt.loadNpmTasks('grunt-contrib-copy-force');

};
