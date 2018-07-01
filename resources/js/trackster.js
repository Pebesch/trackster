var Trackster = {};
const API_KEY = "45182c18c0402fedff19aa5e7643556a"

/*
  Given an array of track data, create the HTML for a Bootstrap row for each.
  Append each "row" to the container in the body to display all tracks.
*/
Trackster.renderTracks = function(tracks) {

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
      console.log(data);
    }
  });
};

$(document).ready(function(){

  $("#search-btn").click(function(){
    var $searchValue = $("#search-input").val();
    Trackster.searchTracksByTitle($searchValue);
  });
});
