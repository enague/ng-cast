angular.module('video-player')

.component('search', {
  bindings: {
    callback: '<'
  },
  controller: function (){
    
    this.click = function () {
      youTube.getVideos(this.inputVal, this.callback); 
    }
  },
  templateUrl: "src/templates/search.html"
});
