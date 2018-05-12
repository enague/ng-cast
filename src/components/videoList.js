angular.module('video-player')
.component('videoList', {
  bindings: {
    videoListVideoData: '<',
    choose: '<'
  },
  controller: function() {
    //this.videoListVideoData = exampleVideoData;
    console.log('hello from videoList');
    // this.choose = function(video) {
    //   console.log(video);
    // }
    
  },
  //template: "<h1> hello! </h1>"
  templateUrl: "src/templates/videoList.html"
});
