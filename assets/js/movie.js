// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement("script");

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player("trailer", {
    height: "100%",
    width: "100%",
    videoId: "l8BpJ8vBDZI",
    events: {
      onReady: onPlayerReady,
      onStateChange: onPlayerStateChange,
    },
  });
}

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
  event.target.playVideo();
}

// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.
var done = false;
function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.PLAYING && !done) {
    setTimeout(stopVideo, 0);
    done = true;
  }
}
function stopVideo() {
  player.stopVideo();
}

const blackOut = document.querySelector("#blackout");
const playBtn = document.querySelector(".play");
const closeBtn = document.querySelector(".modal_close");

function handleplaying() {
  blackOut.classList.remove("overlay");
}

function handleclosing() {
  blackOut.classList.add("overlay");
  stopVideo();
}
playBtn.addEventListener("click", handleplaying);
closeBtn.addEventListener("click", handleclosing);
