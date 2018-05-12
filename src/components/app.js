angular.module('video-player')

.component('app', {
  controller: function (youTube) {
    console.log(this);
    console.log('hello');
    this.appVideoData = exampleVideoData;
    this.currentVideo = exampleVideoData[1];
    
    //note the $ctrl.choosevideo WITHOUT the () in app.html
    //you only wanna pass the invocation when it's on click
    //so you put parens when you pass it down in videolist.html
    //NOT in app.html
    this.choosevideo = video => {
      this.currentVideo = video;
      youTube.getvids();
      
    };


    this.getvideos = response => {
      //console.log('sup')
      //call our youtube videos from here
      this.appVideoData = response;
      this.currentVideo = response[0];
    };

    //youTube.getvids(1,2);
  },
  templateUrl: 'src/templates/app.html'
});

//'app' in this case points to the app tag in our index.html
//which is Angular.
