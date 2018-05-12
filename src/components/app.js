angular.module('video-player')

.component('app', {
  controller: function () {
    this.appVideoData = exampleVideoData;
    this.currentVideo = exampleVideoData[1];
    
    //note the $ctrl.choosevideo WITHOUT the () in app.html
    //you only wanna pass the invocation when it's on click
    //so you put parens when you pass it down in videolist.html
    //NOT in app.html
    this.choosevideo = video => {
      this.currentVideo = video;
    }
  },
  templateUrl: 'src/templates/app.html'
});

//'app' in this case points to the app tag in our index.html
//which is Angular.
