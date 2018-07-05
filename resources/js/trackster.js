var Trackster = {};
const API_KEY = "45182c18c0402fedff19aa5e7643556a"

/*
  Given an array of track data, create the HTML for a Bootstrap row for each.
  Append each "row" to the container in the body to display all tracks.
*/
Trackster.renderTracks = function(tracks) {
  $("#record-lister").empty();
  for(var i = 0; i < tracks.length; i++){
    var track = tracks[i];
    var mediumAlbumArt = track.image[1]["#text"];
    var listeners = numeral(track.listeners).format('0,0');
    var htmlInsertion =
    `<div class="container-fluid">
      <div class="entry">
        <a href="${track.url}" class="col-xs-1 col-xs-offset-1" target="_blank"><i class="fa fa-3x fa-play-circle-o"></i></a>
        <p class="col-xs-4">${track.name}</p>
        <p class="col-xs-2">${track.artist}</p>
        <div class="cover-container col-xs-2">
          <img src="${mediumAlbumArt}" alt="Album Cover Art">
        </div>
        <p class="col-xs-2">${listeners}</p>
      </div>
    </div>`;
    $("#record-lister").append(htmlInsertion);
  }
};

/*
  Given a search term as a string, query the LastFM API.
  Render the tracks given in the API query response.
*/
Trackster.searchTracksByTitle = function(title) {
  $.ajax({
    url: 'https://ws.audioscrobbler.com/2.0/?method=track.search&track=' + title + '&api_key=' + API_KEY + '&format=json',
    datatype: 'jsonp',
    success: function(data){
      Trackster.renderTracks(data.results.trackmatches.track);
    }
  });
};

$(document).ready(function(){

  $("#search-btn").click(function(){
    var $searchValue = $("#search-input").val();
    Trackster.searchTracksByTitle($searchValue);
  });
});
