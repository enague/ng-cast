angular.module('video-player', [])

.component('app', {
  controller: function () {
    this.videoData = exampleVideoData;
  },
  templateUrl: 'src/templates/app.html'
});

//'app' in this case points to the app tag in our index.html
//which is Angular.
