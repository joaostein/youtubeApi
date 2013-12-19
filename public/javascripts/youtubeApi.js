// video id = 7QBgK0_RbkE

var params = {
  allowScriptAccess: "always"
};

var atts = {
  id: "myPlayer"
};

// swfobject.embedSWF(swfUrl, htmlElementId, width, height, swfVersion, xiSwfUrlStr, flashvarsObj, paramsObj, attrObj)
swfobject.embedSWF("http://www.youtube.com/v/7QBgK0_RbkE?enablejsapi=1&playerapiid=myPlayer&version=3", "youtubeApiPlayer", "425", "356", "8", null, null, params, atts);

// To test the functions, we need to have a local server running (https://developers.google.com/youtube/js_api_reference#GettingStarted)
var onYouTubePlayerReady = function (playerId) {
  myPlayer = new YoutubePlayer(); // Create a new YouTubePlayer object
  myPlayer.loaded = true; // Set loaded to true after successfully loading the video
};

var YoutubePlayer = function () {
  this.loaded = false;
  this.player = document.getElementById('myPlayer'); // Get player element DOM using it's ID
}

YoutubePlayer.prototype.play = function () {
  if (this.player && this.loaded) {
    this.player.playVideo(); // Get the player DOM element and invoke the API .playVideo() (https://developers.google.com/youtube/js_api_reference#playVideo)
  }
}








