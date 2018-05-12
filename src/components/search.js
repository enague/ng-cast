angular.module('video-player')

.component('search', {
  bindings: {
    callback: '<'
  },
  controller: function (){
    
  this.click = function () {
      console.log(this.inputVal);
    }
  },
  templateUrl: "src/templates/search.html"
});
