angular.module('video-player')

.component('videoPlayer', {
  bindings: {
    videos: '<'
  },
  
  templateUrl: "src/templates/videoPlayer.html"
});
