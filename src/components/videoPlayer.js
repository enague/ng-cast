angular.module('video-player')

.component('videoPlayer', {
  bindings: {
    videos: '<',
    currentVideo: '<'
  },
  templateUrl: "src/templates/videoPlayer.html"
});
