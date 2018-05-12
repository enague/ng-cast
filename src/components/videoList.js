angular.module('video-player')
.component('videoList', {
  bindings: {
    videoListVideoData: '<',
  },
  controller: function($scope) {
    //this.videoListVideoData = exampleVideoData;
    console.log('hello from videoList');
    //.console.log(video);
    this.choose = function(video) {
      console.log('clicked')
    }
    
  },
  //template: "<h1> hello! </h1>"
  templateUrl: "src/templates/videoList.html"
});
