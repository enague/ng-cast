angular.module('video-player')
//the $http here serves as the equivalent of the ajax request
.service('youTube', function($http) { 
  
  //should be able to call youTube.getVideos anywhere in your app
  //because the youTube service targets the video-player app
  //and everything lives in that app
  this.getvids = function (query, callback){
    $http({
      method: 'GET',
      url: 'https://www.googleapis.com/youtube/v3/search',
      params: {
        q: query,
        part: 'snippet',
        maxResults: 5,
        type: 'video',
        key: window.YOUTUBE_API_KEY,
        videoEmbeddable: 'true'
      }
    }).then(function successCallback(response) {
      // this callback will be called asynchronously
        console.log('search youtube success!');
        console.log(callback);
        console.log(response);
        console.log('response above this');
        callback(response);
      // when the response is available
    }, function errorCallback(response) {
        console.log('search Youtube didnt work');
        //console.error(response)
    });
  }
});
