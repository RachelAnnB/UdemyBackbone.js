require.config({
        paths: {
                jquery: 'lib/jquery-min',
                underscore: 'lib/underscore-min',
                backbone: 'lib/backbone-min'
        }
});


//main module is responsible for starting the application
//the first [] takes an array of dependencies
//the second function(){} is a factory function called when all the dependencies are loaded
define(['app'], function(App){
        App.initialize();
});


