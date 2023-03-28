const mix = require('laravel-mix');

mix.js('src/js/egodesign.modal.js', 'dist/js/egodesign.modal.js')
    .sass('src/scss/egodesign.modal.scss', 'dist/css/egodesign.modal.css');