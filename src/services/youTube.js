angular.module('video-player')
.service('youTube', function(query, callback){
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
});
