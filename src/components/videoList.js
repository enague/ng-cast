angular.module('video-player')
.component('videoList', {
  bindings: {
    videoListVideoData: '<',
  },
  controller: function($scope) {
    //this.videoListVideoData = exampleVideoData;
    console.log('hello from videoList');
    //.console.log(video);
    
  },
  //template: "<h1> hello! </h1>"
  templateUrl: "src/templates/videoList.html"
});
