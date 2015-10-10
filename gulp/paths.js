'use strict';

module.exports = {

    source: {
        jade: 'src/templates/**/*.jade',
        js: 'src/scripts/**/*.js',
        sass: 'src/styles/**/*.scss',
        img: 'src/images/**/*.{jpg,png,gif}',
        files: {
            config: './src/config.json',
            jade: 'src/templates/*.jade',
            sass: 'src/styles/main.scss',
            js:[
              'src/scripts/ryejs.js',
              'src/scripts/components.js',
              'src/scripts/smooth-scroll.js',
              'src/scripts/component.form-label-dynamic.js',
              'src/scripts/component.google-analytics.js',
              'src/scripts/component.navigation-mobile.js',
              'src/scripts/component.navigation.js',
              'src/scripts/konami-code.js',
              'src/scripts/boot.js'
            ],
            tests: 'nightwatch.json'
        }
    },

    browserSync: {
        html: 'www/**/*.html',
        js: 'www/js/**/*.js',
        css: 'www/css/**/*.css',
        img: 'www/img/**/*'
    },

    build: {
        html: './www/',
        js: 'www/js',
        css: 'www/css/',
        img: 'www/img'
    }
};
