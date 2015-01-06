/*
 * Single Picture Uploader
 * Provides a preview of the image before uploading
 *
 */
module.factory("jjp.FileObject", ["$q", "$log",function($q, $log){
  var FileObject = {
    ReadImage : function(file){
      var deferred = $q.defer();

      var reader = new FileReader();
      reader.onload = onLoad(reader, deferred);
      reader.onerror = onError(reader, deferred);
      reader.onprogress = onProgress(reader, deferred);

      reader.readAsDataURL(file);

      return deferred.promise;
    }
  };

  var onLoad = function(reader, deferred) {
    return function () {
      deferred.resolve(reader.result);
    };
  };

  var onError = function (reader, deferred) {
    return function () {
      deferred.reject(reader.result);
    };
  };

  var onProgress = function(reader, deferred) {
    return function (event) {
      deferred.notify(event);
    };
  };

  return FileObject;
}]);

module.directive("pfPictureUploader", function(){
  return {
    restrict: 'E',
    scope: {
      title: '@',
      ngModel : '=',
      preview : '=?',
      url: '@?',
      result: '=?',
      status: '=?',
      maxSize: '=?',
      required: '=?',
      ngRequired:'=?',
    },
    replace: true,
    transclude: true,
    templateUrl: '/jjp/pf/picture.html',

    link: function(scope,el){
      angular.element(el[0].querySelector('.file-selector')).bind("click", function(e){
        el[0].querySelector('input').click();
      });
      angular.element(el[0].querySelector('input')).bind("change", function(e){
        if( typeof((e.srcElement || e.target).files[0]) !== "undefined"){
          scope.$apply(function(){
            scope.ngModel = (e.srcElement || e.target).files[0];
            scope.Select();
          });
        }
      });
    },

    controller: ['$scope','$http','jjp.FileObject', function($scope, $http, FileObject){

      $scope.Select = function(){
        $scope.status = 1;
        if($scope.ngModel.size > $scope.size){
          $scope.status = -10;
          $scope.result = "Image is too Big!";
          return;
        }
        FileObject.ReadImage($scope.ngModel).then(function(result) {
          $scope.preview = result;
          $scope.status = 2;
        },function(error){
          $scope.status = -1;
          $scope.result = error;
          console.warn(error);
        },function(event){
          $scope.load = event;
        });
      };

      $scope.Upload = function(){
        $scope.status = 3;
        var fd = new FormData();
        fd.append('file', $scope.ngModel);
        $http.post($scope.url, fd, {
            transformRequest: angular.identity,
            headers: {'Content-Type': undefined}
        }).success(function(data){
          $scope.status = 4;
          $scope.result = data;
        }).error(function(error){
          $scope.status = -1;
          $scope.result = error;
          console.warn(error);
        });
      };

      $scope.Remove = function(){
        $scope.ngModel = null;
        $scope.preview = null;
        $scope.status = 0;
      };

      $scope.CanUpload = function(){
        var urlPattern = new RegExp("^(ht|f)tp(s?)\:\/\/(([a-zA-Z0-9\-\._]+(\.[a-zA-Z0-9\-\._]+)+)|localhost)(\/?)([a-zA-Z0-9\-\.\?\,\'\/\\\+&amp;%\$#_]*)?([\d\w\.\/\%\+\-\=\&amp;\?\:\\\&quot;\'\,\|\~\;]*)$");
        return urlPattern.test($scope.url);
      };

      // maxSize or 3MB
      $scope.size = $scope.maxSize || 3000000;
      $scope.ngModel = {};
      $scope.status = 0;
      $scope.result = {};
      $scope.showPreview = 0;
      $scope.showUpload = $scope.CanUpload();
    }]
  };
});
