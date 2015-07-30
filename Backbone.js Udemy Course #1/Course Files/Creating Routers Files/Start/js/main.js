//a Backbone View has been created for each page - Artists, Albums, Genres
var ArtistsView = Backbone.View.extend({
    render: function(){
        this.$el.html("ARTISTS VIEW");
        
        return this;
    }
});

var AlbumsView = Backbone.View.extend({
    render: function(){
        this.$el.html("ALBUMS VIEW");
        
        return this;
    }
});

var GenresView = Backbone.View.extend({
    render: function(){
        this.$el.html("GENRES VIEW");
        
        return this;
    }
});

//This is a Router
//its responsible for monitoring changes in the browsers address, and envoking a handler if the address matches a given pattern
//the handler then instantiates the corresponding view and renders it on the same page
var AppRouter = Backbone.Router.extend({
    //defining the routes
    routes: {
        //this is a route pattern
        "albums": "viewAlbums",
        //this is a route parameter - :albumId
        "albums/:albumId": "viewAlbumById",
        
        //this is a route pattern
        "artists": "viewArtists",
        
        //this is a route pattern
        "genres": "viewGenres",
        
        //this is a default handler for any other routes
        //it contains a splat part that can match any of the URL components
        "#other": "defaultRoute",
    },
    
    //this is the route handler for viewAlbumById
    viewAlbumById: function(albumId){
        
    },
    
    //this is a route handler for viewAlbums
    viewAlbums: function(){
       
        //in the route handler, simply create a new view and then render it
        //we are rendering the AlbumsView we created earlier
        var view = new AlbumsView({ el: "#container" });
        view.render();
    
    },
    
    //this is the route handler for viewArtists
    viewArtists: function(){
        //this is the render for ArtistsView
        var view = new ArtistsView({ el: "#container" });
        view.render();
    },
    
    //this is the route handler for viewGenres
    viewGenres: function(){
        //this is the render for GenresView
        var view = new GenresView({ el: "#container" });
        view.render();
    },

    //this is the route handler for defaultRoute
//    defaultRoute: funtion(){},
//    
//    
});

//this instantiates or represents the Backbone compoments
var router = new AppRouter();
//this tells Backbone to start listing changes to the browsers address
Backbone.history.start();

//this is the View for the Navigation Bar
//this is responsible for clicks on the items on the navigation bar
//when an items clicked, we get the related URL and call the navigate method on the router to change the browser address
//once the address is changed, the same router object detects if a handler is defined to match the address
//if they do, it will call the handler, which will render the View on the page
var NavView = Backbone.View.extend({
    events: {
        "click": "onClick"
    },
    
    //the function method is recieving an arguement (e), which is a JQuery event object
    onClick: function(e){
        
        //we use the target property to get the li that was clicked
        var $li = $(e.target);
        
        //then we use the attribute method to read the data-url attribute
        //this attribute holds the related URL of the target page
        //then we pass that value to the navigate method of our router object
        //the navigat method changes the browsers address, which causes the corresponding route handle to be envoked
        router.navigate($li.attr("data-url"), { trigger: true });
        //the 2nd arguement to the navigate method is - trigger
        //is an object that tells Backbone whether it should call the route handler function or not
        //this will almost always be set to true
    }
});

var navView = new NavView({ el: "#nav" });

/*EXAMPLE FOR THE ALBUMSVIEW
assume this application is for a website being hosted at example.com
we are telling Backbone, that if the browsers address changes to: www.example.com/albums/
then call the viewAlbums function

whatever comes after albums/ in the browsers address, will be passed to the corresponding handler as a parameter called albumId
if the browser address changes to www.example.com/albums/1/ then the viewAlbumById function will be called
with the albumId set to 1
*/

/*EXAMPLE FOR THE DEFAULTROUTE
we are telling Backbone that if the browsers address does not match any of the earlier patterns, then use this one
an example of using this would be a 404: Page Not Found page
*/