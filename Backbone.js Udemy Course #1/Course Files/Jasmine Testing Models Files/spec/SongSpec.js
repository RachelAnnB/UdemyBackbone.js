describe("Song", function(){
  var song;
  
  beforeEach(function(){
    song = new Song();
  });
  
  it("urlRoot should be /api/songs", function(){
    expect(song.urlRoot).toEqual("/api/songs");
  });
  
  //this is the spec for the defaults method
  it("numberOfPlays attribute should be 0 by default.", function(){
    expect(song.get("numberOfPlays")).toEqual(0);
  });
  
  //this is the spec for the validate method
  it("title is required.", function(){
    expect(song.isValid()).toBeFalsy();
    
    song.set("title", "Blue in Green");
    
    expect(song.isValid()).toBeTruthy();
  });
  
  //this is the spec for the play method
  it("play should increment the numberOfPlays.", function(){
    song.play();
    
    expect(song.get("numberOfPlays")).toEqual(1);
  });
  
});