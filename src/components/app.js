angular.module('video-player')

.component('app', {
  controller: function () {
    this.appVideoData = exampleVideoData;
    this.currentVideo = exampleVideoData[1];
    this.choosevideo = (video) => {
      console.log('i was clicked');
      console.log(video);
      this.currentVideo = video;
    }
  },
  templateUrl: 'src/templates/app.html'
});

//'app' in this case points to the app tag in our index.html
//which is Angular.
