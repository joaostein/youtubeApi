// video id = 7QBgK0_RbkE

var params = {
  allowScriptAccess: "always"
};

var atts = {
  id: "myytplayer"
};

// swfobject.embedSWF(swfUrl, htmlElementId, width, height, swfVersion, xiSwfUrlStr, flashvarsObj, paramsObj, attrObj)
swfobject.embedSWF("http://www.youtube.com/v/7QBgK0_RbkE?enablejsapi=1&playerapiid=ytplayer&version=3", "ytapiplayer", "425", "356", "8", null, null, params, atts);

// To test the functions, we need to have a local server running (https://developers.google.com/youtube/js_api_reference#GettingStarted)
function onYouTubePlayerReady(playerId) {
  ytplayer = document.getElementById("myytplayer");
}