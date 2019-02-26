 module.exports = function (grunt) {

     grunt.config('sass', {

        base: {
            options: {
                style: 'compressed',
                sourcemap: 'auto'
            },
            files: [{
                expand: true,
                cwd: '../sass/7_css/',
                src: ["base.scss"],
                dest: '../../dist/css/',
                ext: '.css'
            }]
        },

        header: {
            options: {
                style: 'compressed',
                sourcemap: 'auto'
            },
            files: [{
                expand: true,
                cwd: '../sass/7_css/',
                src: ["header.scss"],
                dest: '../../dist/css/',
                ext: '.css'
            }]
        },

        footer: {
            options: {
                style: 'compressed',
                sourcemap: 'auto'
            },
            files: [{
                expand: true,
                cwd: '../sass/7_css/',
                src: ["footer.scss"],
                dest: '../../dist/css/',
                ext: '.css'
            }]
        },

     });

     grunt.loadNpmTasks('grunt-contrib-sass');

 };


