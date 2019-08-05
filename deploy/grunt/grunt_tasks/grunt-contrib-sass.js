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


        banners: {
            options: {
                style: 'compressed',
                sourcemap: 'auto'
            },
            files: [{
                expand: true,
                cwd: '../sass/7_css/',
                src: ["banners.scss"],
                dest: '../../dist/css/',
                ext: '.css'
            }]
        },

        listprod: {
            options: {
                style: 'compressed',
                sourcemap: 'auto'
            },
            files: [{
                expand: true,
                cwd: '../sass/7_css/',
                src: ["listprod.scss"],
                dest: '../../dist/css/',
                ext: '.css'
            }]
        },

        login: {
            options: {
                style: 'compressed',
                sourcemap: 'auto'
            },
            files: [{
                expand: true,
                cwd: '../sass/7_css/',
                src: ["login.scss"],
                dest: '../../dist/css/',
                ext: '.css'
            }]
        },

        myacc: {
            options: {
                style: 'compressed',
                sourcemap: 'auto'
            },
            files: [{
                expand: true,
                cwd: '../sass/7_css/',
                src: ["myacc.scss"],
                dest: '../../dist/css/',
                ext: '.css'
            }]
        },

        elements: {
            options: {
                style: 'compressed',
                sourcemap: 'auto'
            },
            files: [{
                expand: true,
                cwd: '../sass/7_css/',
                src: ["elements.scss"],
                dest: '../../dist/css/',
                ext: '.css'
            }]
        },

        basket: {
            options: {
                style: 'compressed',
                sourcemap: 'auto'
            },
            files: [{
                expand: true,
                cwd: '../sass/7_css/',
                src: ["nrk_basket.scss"],
                dest: '../../dist/css/',
                ext: '.css'
            }]
        },

        checkout: {
            options: {
                style: 'compressed',
                sourcemap: 'auto'
            },
            files: [{
                expand: true,
                cwd: '../sass/7_css/',
                src: ["nrk_checkout.scss"],
                dest: '../../dist/css/',
                ext: '.css'
            }]
        },

     });

     grunt.loadNpmTasks('grunt-contrib-sass');

 };


