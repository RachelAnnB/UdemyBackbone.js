//this is the suite
describe("Album", function(){
  var album;
  
  beforeEach(function(){
    album = new Album();
  });
  
  it("url should be /api/songs", function(){
    expect(album.url).toEqual("/api/songs");
  });
  
  //this is a suite for the getPopularSong method
  describe("getPopularSong", function(){
    //this is the spec for when the collection is empty, and comes back as undefined
    it("should return undefined if the collection is empty.", function(){
      expect(album.getPopularSong()).toBeUndefined();
    });
    //this is the spec for when the collection comes back with the most popular song 
    it("should return the song with the hightest number of plays if the collection is not empty.", function(){
      var song1 = new Song({ title: "Blue in Green", numberOfPlays: 10 });
      var song2 = new Song({ title: "So What", numberOfPlays: 5 });
      
      album.add(song1);
      album.add(song2);
      
      expect(album.getPopularSong()).toEqual(song1);
    });
    
  });
  
});