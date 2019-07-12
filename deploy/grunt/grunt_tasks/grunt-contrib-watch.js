module.exports = function(grunt) {

    grunt.config('watch', {

        config: {
            files: ['Gruntfile.js', './grunt_tasks/*'],
            tasks: ['w'],
            options: {
                reload: true
            }
        },
        

        base: {
            files: [ 
                "../sass/1_settings/*.scss",
                "../sass/2_tools/*.scss",
                "../sass/3_generics/*.scss",
                "../sass/4_elements/*.scss",
                "../sass/5_objects/*.scss",
                "../sass/7_css/base.scss"
            ],
            tasks: ['sass:base']
        },

        header: {
            files: [ 
                "../sass/6_components/header/*.scss",
                "../sass/7_css/header.scss",
            ],
            tasks: ['sass:header']
        },

        footer: {
            files: [ 
                "../sass/6_components/footer/*.scss",
                "../sass/7_css/footer.scss",
            ],
            tasks: ['sass:footer']
        },

        banners: {
            files: [ 
                "../sass/6_components/banners/*.scss",
                "../sass/7_css/banners.scss",
            ],
            tasks: ['sass:banners']
        },

        listprod: {
            files: [ 
                "../sass/6_components/listprod/*.scss",
                "../sass/7_css/listprod.scss",
            ],
            tasks: ['sass:listprod']
        },

        myacc: {
            files: [ 
                "../sass/6_components/myacc/*.scss",
                "../sass/7_css/myacc.scss",
            ],
            tasks: ['sass:myacc', 'copy:css_to_project_account']
        },

        login: {
            files: [ 
                "../sass/6_components/login/*.scss",
                "../sass/7_css/login.scss",
            ],
            tasks: ['sass:login', 'copy:css_to_project_checkout']
        },

        elements: {
            files: [ 
                "../sass/6_components/elements/*.scss",
                "../sass/7_css/elements.scss",
            ],
            tasks: ['sass:elements']
        },

        checkout: {
            files: [ 
                "../sass/6_components/checkout/*.scss",
                "../sass/7_css/nrk_checkout.scss",
            ],
            tasks: ['sass:checkout', 'copy:css_to_project_checkout']
        },


    });
  
    grunt.loadNpmTasks('grunt-contrib-watch');

  };

