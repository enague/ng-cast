angular.module('video-player')
.component('videoListEntry', {
  bindings: {
    item: '<'
  },
  controller: function ($scope) {
    console.log('hello from VLE');
  },
  templateUrl: "src/templates/videoListEntry.html"
});
