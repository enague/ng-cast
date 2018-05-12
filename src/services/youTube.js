angular.module('video-player')
//the $http here serves as the equivalent of the ajax request
.service('youTube', function($http) { 
  
  //should be able to call youTube.getVideos anywhere in your app
  //because the youTube service targets the video-player app
  //and everything lives in that app
  this.getvids = function (query, callback){
    $http({
      method: 'GET',
      url: '/youtube/v3/search',
      params: {
        q: query,
        maxResults: 5,
        key: window.YOUTUBE_API_KEY,
        videoEmbeddable: 'true'
      }
    }).then(function successCallback(response) {
      // this callback will be called asynchronously
        callback(response);
      // when the response is available
    }, function errorCallback(response) {
        console.error(response)
    });
  }
});
