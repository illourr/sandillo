({
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
})
