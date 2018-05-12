angular.module('video-player')

.component('search', {
  bindings: {
    callback: '<'
  },
  controller: function (youTube){
    this.click = function () {
      youTube.getvids(this.inputVal, this.callback); 
    }
  },
  templateUrl: "src/templates/search.html"
});
