// video id = 7QBgK0_RbkE

var params = {
  allowScriptAccess: "always"
};

var atts = {
  id: "playerContainer"
};

// swfobject.embedSWF(swfUrl, htmlElementId, width, height, swfVersion, xiSwfUrlStr, flashvarsObj, paramsObj, attrObj)
swfobject.embedSWF("http://www.youtube.com/v/7QBgK0_RbkE?enablejsapi=1&playerapiid=myPlayer&version=3", "youtubeApiPlayer", "425", "356", "8", null, null, params, atts);

// To test the functions, we need to have a local server running (https://developers.google.com/youtube/js_api_reference#GettingStarted)
var onYouTubePlayerReady = function (playerId) {
  myPlayer = document.getElementById("playerContainer");
};