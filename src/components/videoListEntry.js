angular.module('video-player')
.component('videoListEntry', {
  bindings: {
    item: '<',
    //choose: '<'
  },
  controller: function () {
    //console.log('hello from VLE');
    //    console.log(this);
  },
  templateUrl: "src/templates/videoListEntry.html"
});
