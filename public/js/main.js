
requirejs.config({
    appDir: "../",
    baseUrl: "js/",
    dir: "../webapp-build",
    //Comment out the optimize line if you want
    //the code minified by UglifyJS
    optimize: "none",

    shim: {
        'modernizr': {
            exports: 'modernizr'
        }
    },

    paths: {
        "jquery": "require-jquery",
        "modernizr": "lib/modernizr-2.6.2-respond-1.1.0.min"        
    },


    modules: [
        //Optimize the application files. jQuery is not 
        //included since it is already in require-jquery.js
        {
            name: "main"
        }
    ]
});

// $.fn.alpha = function() {
//     return this.append('<p>Alpha is Go!</p>');
// };
// define("jquery.alpha", function(){});

// $.fn.beta = function() {
//     return this.append('<p>Beta is Go!</p>');
// };

// define("jquery.beta", function(){});

define("addEl",
    [""],
    function() {
        $(".content").append("<button class='button small'>Other Button</button>");
   }
);



require(["jquery", "modernizr", "addEl"], function($) {
    //the jquery.alpha.js and jquery.beta.js plugins have been loaded.
    $(function() {

    });

});

define("main", function(){});
