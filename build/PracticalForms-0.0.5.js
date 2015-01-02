/*! PracticalForms v0.0.5 | (c) 2015, JJ Programs, LLC | Distributed under the MIT License */
angular.module('jjp.PracticalForms.templates', []).run(['$templateCache', function($templateCache) {
  $templateCache.put("/jjp/pf/email.html",
    "<div class=\"form-group has-feedback\" ng-form=subform ng-class=\"{'has-error':subform.name.$invalid && subform.name.$dirty, 'has-success':!subform.name.$invalid && subform.name.$dirty }\"><label class=control-label>{{title}}<span ng-if=\"required || ngRequired\">*</span> <span ng-show=\"subform.name.$invalid && subform.name.$dirty\"><span ng-show=subform.name.$error.required>- Required!</span> <span ng-show=subform.name.$error.email>- Not a valid Email!</span></span></label><p class=FormHint ng-transclude>Form Hint</p><input class=form-control type=email name=name ng-model=ngModel ng-required=ngRequired required ng-trim=ngTrim placeholder=\"Ex: john.doe@company.com\"> <span class=\"glyphicon glyphicon-remove form-control-feedback\" style=top:55px ng-show=\"subform.name.$invalid && subform.name.$dirty\"></span> <span class=\"glyphicon glyphicon-ok form-control-feedback\" style=top:55px ng-show=\"!subform.name.$invalid && subform.name.$dirty\"></span></div>");
  $templateCache.put("/jjp/pf/number.html",
    "<div class=\"form-group has-feedback\" ng-form=subform ng-class=\"{'has-error':subform.name.$invalid && subform.name.$dirty, 'has-success':!subform.name.$invalid && subform.name.$dirty }\"><label class=control-label>{{title}}<span ng-if=\"required || ngRequired\">*</span> <span ng-show=\"subform.name.$invalid && subform.name.$dirty\"><span ng-show=subform.name.$error.required>- Required!</span> <span ng-show=subform.name.$error.number>- Must be a Number!</span> <span ng-show=subform.name.$error.minlength>- Must be Longer then 0 characters</span> <span ng-show=subform.name.$error.maxlength>- Must be shorter then 255 characters</span> <span ng-show=subform.name.$error.pattern>- Invalid Input</span></span></label><p class=FormHint ng-transclude>Form Hint</p><input class=form-control type=number name=name ng-model=ngModel ng-maxlength=255 ng-required=ngRequired required placeholder=\"{{placeholder}}\"> <span class=\"glyphicon glyphicon-remove form-control-feedback\" style=top:55px ng-show=\"subform.name.$invalid && subform.name.$dirty\"></span> <span class=\"glyphicon glyphicon-ok form-control-feedback\" style=top:55px ng-show=\"!subform.name.$invalid && subform.name.$dirty\"></span></div>");
  $templateCache.put("/jjp/pf/options.html",
    "<div class=form-group ng-class=\"{'has-error':isError && isDirty, 'has-success':!isError && isDirty }\"><label class=control-label>{{title}} <span ng-if=required>*</span> <span ng-show=\"isError && isDirty\">- Invalid Input!</span></label><p class=FormHint ng-bind=description></p><span ng-form=subform ng-transclude>Form Content</span></div>");
  $templateCache.put("/jjp/pf/password.html",
    "<div class=\"form-group has-feedback\" ng-form=subform ng-class=\"{'has-error':subform.name.$invalid && subform.name.$dirty, 'has-success':!subform.name.$invalid && subform.name.$dirty }\"><label class=control-label>{{title}}<span ng-if=\"required || ngRequired\">*</span> <span ng-show=\"subform.name.$invalid && subform.name.$dirty\"><span ng-show=subform.name.$error.required>- Required!</span> <span ng-show=subform.name.$error.minlength>- Must be at least 8 characters</span> <span ng-show=subform.name.$error.maxlength>- Must be shorter then 255 characters</span> <span ng-show=subform.name.$error.pattern>- Must contain at least 1 lowercase letter, 1 uppercase letter, and 1 digit</span></span></label><p class=FormHint ng-transclude>Form Hint</p><input class=form-control type=password name=name ng-model=ngModel ng-minlength=8 ng-maxlength=255 ng-pattern=\"/(?=^.{8,}$)(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\\s)[0-9a-zA-Z!@#$%^&*()]*$/\" ng-required=true required> <span class=\"glyphicon glyphicon-remove form-control-feedback\" style=top:55px ng-show=\"subform.name.$invalid && subform.name.$dirty\"></span> <span class=\"glyphicon glyphicon-ok form-control-feedback\" style=top:55px ng-show=\"!subform.name.$invalid && subform.name.$dirty\"></span></div>");
  $templateCache.put("/jjp/pf/pattern.html",
    "<div class=\"form-group has-feedback\" ng-form=subform ng-class=\"{'has-error':subform.name.$invalid && subform.name.$dirty, 'has-success':!subform.name.$invalid && subform.name.$dirty }\"><label class=control-label>{{title}}<span ng-if=\"required || ngRequired\">*</span> <span ng-show=\"subform.name.$invalid && subform.name.$dirty\"><span ng-show=subform.name.$error.required>- Required!</span> <span ng-show=subform.name.$error.minlength>- Must be Longer then 0 characters</span> <span ng-show=subform.name.$error.maxlength>- Must be shorter then 255 characters</span> <span ng-show=subform.name.$error.pattern>- Invalid Input</span></span></label><p class=FormHint ng-transclude>Form Hint</p><input class=form-control name=name ng-model=ngModel ng-minlength=0 ng-maxlength=255 ng-required=ngRequired required ng-trim=\"ngTrim || true\" placeholder=\"{{placeholder}}\"> <span>{{ngModel}}</span> <span>{{ngMinlength}}</span> <span class=\"glyphicon glyphicon-remove form-control-feedback\" style=top:55px ng-show=\"subform.name.$invalid && subform.name.$dirty\"></span> <span class=\"glyphicon glyphicon-ok form-control-feedback\" style=top:55px ng-show=\"!subform.name.$invalid && subform.name.$dirty\"></span></div>");
  $templateCache.put("/jjp/pf/percentage.html",
    "<div class=\"form-group has-feedback\" ng-form=subform ng-class=\"{'has-error':subform.name.$invalid && subform.name.$dirty, 'has-success':!subform.name.$invalid && subform.name.$dirty }\"><label class=control-label>{{title}}<span ng-if=\"required || ngRequired\">*</span> <span ng-show=\"subform.name.$invalid && subform.name.$dirty\"><span ng-show=subform.name.$error.required>- Required!</span> <span ng-show=subform.name.$error.percent>- Value must be between 0% and 100%</span></span></label><p class=FormHint ng-transclude>Form Hint</p><input pf-percentage-mask class=form-control name=name ng-model=ngModel ng-trim=1 ng-required=ngRequired required> <span class=\"glyphicon glyphicon-remove form-control-feedback\" style=top:55px ng-show=\"subform.name.$invalid && subform.name.$dirty\"></span> <span class=\"glyphicon glyphicon-ok form-control-feedback\" style=top:55px ng-show=\"!subform.name.$invalid && subform.name.$dirty\"></span></div>");
  $templateCache.put("/jjp/pf/phone.html",
    "<div class=\"form-group has-feedback\" ng-form=subform ng-class=\"{'has-error':subform.name.$invalid && subform.name.$dirty, 'has-success':!subform.name.$invalid && subform.name.$dirty }\"><label class=control-label>{{title}}<span ng-if=\"required || ngRequired\">*</span> <span ng-show=\"subform.name.$invalid && subform.name.$dirty\"><span ng-show=subform.name.$error.required>- Required!</span> <span ng-show=subform.name.$error.pattern>- Invalid Input. Enter a valid phone number</span></span></label><p class=FormHint ng-transclude>Form Hint</p><input class=form-control name=name ng-model=ngModel ng-required=ngRequired required ng-trim=true ng-pattern=\"/^(?:\\([2-9]\\d{2}\\)\\ ?|[2-9]\\d{2}(?:\\-?|\\ ?))[2-9]\\d{2}[- ]?\\d{4}$/\" placeholder=\"Ex: (123)-456-7890\"> <span class=\"glyphicon glyphicon-remove form-control-feedback\" style=top:55px ng-show=\"subform.name.$invalid && subform.name.$dirty\"></span> <span class=\"glyphicon glyphicon-ok form-control-feedback\" style=top:55px ng-show=\"!subform.name.$invalid && subform.name.$dirty\"></span></div>");
  $templateCache.put("/jjp/pf/picture.html",
    "<div class=\"form-group has-feedback\" ng-form=subform ng-class=\"{'has-error':subform.name.$invalid && subform.name.$dirty, 'has-success':!subform.name.$invalid && subform.name.$dirty }\"><label class=control-label>{{title}}<span ng-if=\"required || ngRequired\">*</span> <span ng-show=\"subform.name.$invalid && subform.name.$dirty\"><span ng-show=subform.name.$error.required>- Required!</span></span></label><p class=FormHint ng-transclude>Form Hint</p><div class=\"well row\"><div class=col-xs-9><div class=\"fileinput-preview thumbnail\" style=\"width: 250px\" ng-show=\"showPreview == 2\"><img ng-src=\"{{preview}}\"></div><h4 ng-show=\"showPreview ==0 \">No Image Selected</h4><h4 ng-show=\"showPreview ==1 \">Loading {{load.loaded*100/load.total | number:0}}%</h4><h4 ng-show=\"showPreview ==3 \">Error Loading Image</h4><input class=form-control type=file name=name accept=image/* ng-required=ngRequired required style=display:none><p>{{ngModel.name}} <strong>{{status}}</strong></p></div><div class=col-xs-3><button type=button class=\"btn btn-block btn-default file-selector\">Select</button> <button type=button class=\"btn btn-block btn-success\" ng-click=Upload() ng-show=\"showPreview==2\" ng-if=showUpload>Upload</button> <button type=button class=\"btn btn-block btn-danger\" ng-click=Remove() ng-show=\"showPreview > 1\">Remove</button></div></div></div>");
  $templateCache.put("/jjp/pf/state.html",
    "<div class=\"form-group has-feedback\" ng-form=subform ng-class=\"{'has-error':subform.name.$invalid && subform.name.$dirty, 'has-success':!subform.name.$invalid && subform.name.$dirty }\"><label class=control-label>{{title}}<span ng-if=\"required || ngRequired\">*</span> <span ng-show=\"subform.name.$invalid && subform.name.$dirty\"><span ng-show=subform.name.$error.required>- Required!</span> <span ng-show=subform.name.$error.pattern>- Invalid Input. Enter the TWO letter state code</span> <span ng-show=subform.name.$error.maxlength>- Invalid Input. Enter the TWO letter state code</span></span></label><p class=FormHint ng-transclude>Form Hint</p><input class=form-control name=name ng-model=ngModel ng-maxlength=2 ng-required=ngRequired required ng-trim=true ng-pattern=\"/[A-Za-z]{2}/\" placeholder=\"Ex: OH\"> <span class=\"glyphicon glyphicon-remove form-control-feedback\" style=top:55px ng-show=\"subform.name.$invalid && subform.name.$dirty\"></span> <span class=\"glyphicon glyphicon-ok form-control-feedback\" style=top:55px ng-show=\"!subform.name.$invalid && subform.name.$dirty\"></span></div>");
  $templateCache.put("/jjp/pf/text.html",
    "<div class=\"form-group has-feedback\" ng-form=subform ng-class=\"{'has-error':subform.name.$invalid && subform.name.$dirty, 'has-success':!subform.name.$invalid && subform.name.$dirty }\"><label class=control-label>{{title}}<span ng-if=\"required || ngRequired\">*</span> <span ng-show=\"subform.name.$invalid && subform.name.$dirty\"><span ng-show=subform.name.$error.required>- Required!</span> <span ng-show=subform.name.$error.minlength>- Must be Longer then 0 characters</span> <span ng-show=subform.name.$error.maxlength>- Must be shorter then 255 characters</span> <span ng-show=subform.name.$error.pattern>- Invalid Input</span></span></label><p class=FormHint ng-transclude>Form Hint</p><input class=form-control name=name ng-model=ngModel ng-minlength=0 ng-maxlength=255 ng-trim=1 ng-required=ngRequired required placeholder=\"{{placeholder}}\"> <span class=\"glyphicon glyphicon-remove form-control-feedback\" style=top:55px ng-show=\"subform.name.$invalid && subform.name.$dirty\"></span> <span class=\"glyphicon glyphicon-ok form-control-feedback\" style=top:55px ng-show=\"!subform.name.$invalid && subform.name.$dirty\"></span></div>");
  $templateCache.put("/jjp/pf/textarea.html",
    "<div class=\"form-group has-feedback\" ng-form=subform ng-class=\"{'has-error':subform.name.$invalid && subform.name.$dirty, 'has-success':!subform.name.$invalid && subform.name.$dirty }\"><label class=control-label>{{title}}<span ng-if=\"required || ngRequired\">*</span> <span ng-show=\"subform.name.$invalid && subform.name.$dirty\"><span ng-show=subform.name.$error.required>- Required!</span> <span ng-show=subform.name.$error.maxlength>- Must be shorter then {{ngMaxlength || 2500}} characters</span></span></label><p class=FormHint ng-transclude>Form Hint</p><textarea class=form-control type=text name=name ng-model=ngModel ng-maxlength=2500 ng-required=ngRequired required ng-trim=ngTrim placeholder={{placeholder}}>\n" +
    "\n" +
    "  <span class=\"glyphicon glyphicon-remove form-control-feedback\" style=top:55px ng-show=\"subform.name.$invalid && subform.name.$dirty\"></span>\n" +
    "  <span class=\"glyphicon glyphicon-ok form-control-feedback\" style=top:55px ng-show=\"!subform.name.$invalid && subform.name.$dirty\"></span>\n" +
    "</textarea></div>");
  $templateCache.put("/jjp/pf/url.html",
    "<div class=\"form-group has-feedback\" ng-form=subform ng-class=\"{'has-error':subform.name.$invalid && subform.name.$dirty, 'has-success':!subform.name.$invalid && subform.name.$dirty }\"><label class=control-label>{{title}}<span ng-if=\"required || ngRequired\">*</span> <span ng-show=\"subform.name.$invalid && subform.name.$dirty\"><span ng-show=subform.name.$error.required>- Required!</span> <span ng-show=subform.name.$error.url>- Not a valid URL. Make sure it starts with 'http://'</span></span></label><p class=FormHint ng-transclude>Form Hint</p><input class=form-control type=url required name=name ng-model=ngModel ng-required=ngRequired required ng-trim=ngTrim placeholder=\"Ex: http://company.com\"> <span class=\"glyphicon glyphicon-remove form-control-feedback\" style=top:55px ng-show=\"subform.name.$invalid && subform.name.$dirty\"></span> <span class=\"glyphicon glyphicon-ok form-control-feedback\" style=top:55px ng-show=\"!subform.name.$invalid && subform.name.$dirty\"></span></div>");
  $templateCache.put("/jjp/pf/zipcode.html",
    "<div class=\"form-group has-feedback\" ng-form=subform ng-class=\"{'has-error':subform.name.$invalid && subform.name.$dirty, 'has-success':!subform.name.$invalid && subform.name.$dirty }\"><label class=control-label>{{title}}<span ng-if=\"required || ngRequired\">*</span> <span ng-show=\"subform.name.$invalid && subform.name.$dirty\"><span ng-show=subform.name.$error.required>- Required!</span> <span ng-show=subform.name.$error.pattern>- Invalid Zip Code. Plase enter the 5 digit zip code</span></span></label><p class=FormHint ng-transclude>Form Hint</p><input class=form-control name=name ng-model=ngModel ng-required=ngRequired required ng-pattern=\"/^\\d{5}(-\\d{4})?$/\" ng-trim=ngTrim placeholder=\"Ex: 12345\"> <span class=\"glyphicon glyphicon-remove form-control-feedback\" style=top:55px ng-show=\"subform.name.$invalid && subform.name.$dirty\"></span> <span class=\"glyphicon glyphicon-ok form-control-feedback\" style=top:55px ng-show=\"!subform.name.$invalid && subform.name.$dirty\"></span></div>");
  $templateCache.put("/jjp/pf/date.html",
    "<div class=\"form-group has-feedback\" ng-form=subform ng-class=\"{'has-error':subform.name.$invalid && subform.name.$dirty, 'has-success':!subform.name.$invalid && subform.name.$dirty }\"><label class=control-label>{{title}}<span ng-if=\"required || ngRequired\">*</span> <span ng-show=\"subform.name.$invalid && subform.name.$dirty\"><span ng-show=subform.name.$error.required>- Required!</span></span></label><p class=FormHint ng-transclude>Form Hint</p><p><input class=form-control ng-model=ngModel is-open=isOpen ng-required={{ngRequired}} ng-click=\"isOpen=true\" ng-focus=\"isOpen=true\" datepicker-popup=\"MMMM dd, yyyy\" min-date=\"minDate\"> <span class=\"glyphicon glyphicon-remove form-control-feedback\" style=top:55px ng-show=\"subform.name.$invalid && subform.name.$dirty\"></span> <span class=\"glyphicon glyphicon-ok form-control-feedback\" style=top:55px ng-show=\"!subform.name.$invalid && subform.name.$dirty\"></span></p></div>");
}]);

var module = angular.module('jjp.PracticalForms', ['jjp.PracticalForms.templates', 'ui.bootstrap']);



/*
 * Basic form input that has basic validation
 * Uses basic angular form directives 
 *
 */

module.directive("pfCheckboxInput", function(){
  return {
    restrict: 'E',
    scope:{
      title: "@",
    },
    transclude: true,
    replace: true,
    template:'<div class="checkbox"><label><span ng-transclude></span>{{title}}</label></div>',
  };
});

/*
 * Basic form input that has basic validation
 * Uses basic angular form directives 
 *
 */

module.directive("pfEmailInput", function(){
  return {
    restrict: 'E',
    scope: {
      title: '@',
      ngModel : '=',
      required: "=?",
      ngRequired:"=?",
      ngTrim:"=?"
    },
    replace: true,
    transclude: true,
    templateUrl: '/jjp/pf/email.html',
  };
});

/*
 * Basic form input that has basic validation
 * Uses basic angular form directives
 *
 */

module.directive("pfNumberInput", function(){
  return {
    restrict: 'E',
    scope: {
      title: '@',
      placeholder: '@?',
      ngModel : '=',
      required: "=?",
      ngRequired:"=?"
    },
    replace: true,
    transclude: true,
    templateUrl: '/jjp/pf/number.html',
  };
});

/*
 * Basic form input that has basic validation
 * Uses basic angular form directives
 *
 */

module.directive("pfOptionGroup", function(){
  return {
    restrict: 'E',
    scope:{
      title: "@",
      description: '@?',
      required: "=?",
    },
    transclude: true,
    replace: true,
    templateUrl:"/jjp/pf/options.html",
    link: function(scope, element, attrs) {
      if(scope.required){
        element.find(":input").attr("required","required");
      }
      scope.$watch('subform.$invalid', function(isError) {
        scope.isError = isError;
      });
      scope.$watch('subform.$dirty', function(isDirty) {
        scope.isDirty = isDirty;
      });
    }
  };
});

/*
 * Basic form input that has basic validation
 * Uses basic angular form directives 
 *
 */

module.directive("pfPasswordInput", function(){
  return {
    restrict: 'E',
    scope: {
      title: '@',
      ngModel : '=',
    },
    replace: true,
    transclude: true,
    templateUrl: '/jjp/pf/password.html',
  };
});

/*
 * Basic form input that has basic validation
 * Uses basic angular form directives 
 *
 */

module.directive("pfRegexInput", function(){
  return {
    restrict: 'E',
    scope: {
      title: '@',
      placeholder: '@?',
      ngModel : '=',
      required: "=?",
      ngRequired:"=?",
      ngMinlength:"=?",
      ngMaxlength:"=?",
      ngPattern:"@?",
      ngTrim:"=?"
    },
    replace: true,
    transclude: true,
    templateUrl: '/jjp/pf/pattern.html',
  };
});

/*
 * Basic form input that has basic validation
 * Uses basic angular form directives
 *
 */

module.directive("pfPercentageInput", function(){
  return {
    restrict: 'E',
    scope: {
      title: '@',
      placeholder: '@?',
      ngModel : '=',
      required: "=?",
      ngRequired:"=?"
    },
    replace: true,
    transclude: true,
    templateUrl: '/jjp/pf/percentage.html',
  };
});


module.directive("pfPercentageMask", function(){
  return {
    restrict: 'A',
    require: 'ngModel',

    link: function(scope, element, attrs, ctrl) {
      ctrl.$formatters.push(function(inputValue){
        return new Percentage(inputValue).pretty();
      });

      // For angular 1.3
      // ctrl.$validators.validPercent = function(modelValue, viewValue) {
      //   console.log(modelValue, viewValue);
      //   return (modelValue >= 0) && (modelValue <= 100);
      // };

      ctrl.$parsers.push(function(value) {
        var p = new Percentage(value);
        if(value.indexOf("%") < 0 &&  !value.endsWith('%')){
          // The % was deleted, so delete the last number
          p.backspace();
        }
        // console.log(value, ctrl.$viewValue, p.value(), p.pretty());
        //Update the new value if it has changed
        if(p.pretty() != ctrl.$viewValue){
          ctrl.$setViewValue(p.pretty());
          ctrl.$render();
        }

        // Sets the validation
        if((p.value() >= 0) && (p.value() <= 100)){
          ctrl.$setValidity('percent', true);
        }else{
          ctrl.$setValidity('percent', false);
        }
        return String(p.value());
      });
    }
  };
});

function Percentage(s){
  //Remove the leading zeros
  var trimedValue = String(s).replace(/^0*/, '');
  //only return the numbers
  this.val = trimedValue.replace(/[^0-9]/g, '');
}

Percentage.prototype.value = function(){
  return parseFloat(this.val) || 0;
};
Percentage.prototype.pretty = function(){
  if(this.value() > 9)
    return this.value() + " %";
  else
    return "0" + this.value() + " %";
};
Percentage.prototype.backspace = function(){
  //Used to delete the last number of the val;
  // Useful for binding to form when you only have a pretty value
  this.val = this.val.slice(0, this.val.length -1);
};


// Added some cool prototypes since not browser support this yet
if ( typeof String.prototype.startsWith != 'function' ) {
  String.prototype.startsWith = function( str ) {
    return this.substring( 0, str.length ) === str;
  };
}



if ( typeof String.prototype.endsWith != 'function' ) {
  String.prototype.endsWith = function( str ) {
    return this.substring( this.length - str.length, this.length ) === str;
  };
}

/*
 * Basic form input that has basic validation
 * Uses basic angular form directives 
 *
 */

module.directive("pfPhoneInput", function(){
  return {
    restrict: 'E',
    scope: {
      title: '@',
      ngModel : '=',
      required: "=?",
      ngRequired:"=?",
    },
    replace: true,
    transclude: true,
    templateUrl: '/jjp/pf/phone.html',
  };
});

/*
 * Single Picture Uploader
 * Provides a preview of the image before uploading
 *
 */
module.factory("jjp.FileObject", ["$q", "$log",function($q, $log){
  var FileObject = {
    ReadImage : function(file, scope){
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
      preview : '=',
      upload: '@',
      required: "=?",
      ngRequired:"=?",
    },
    replace: true,
    transclude: true,
    templateUrl: '/jjp/pf/picture.html',

    link: function(scope,el){
      angular.element(el[0].querySelector('.file-selector')).bind("click", function(e){
        el[0].querySelector('input').click();
      });
      el.bind("change", function(e){
        scope.ngModel = (e.srcElement || e.target).files[0];
        scope.Select();
      });
    },

    controller: ['$scope','$http','jjp.FileObject', function($scope, $http, FileObject){
      $scope.status = "";
      $scope.showPreview = 0;
      // $scope.showUpload = (/^(ht|f)tp(s?)\:\/\/(([a-zA-Z0-9\-\._]+(\.[a-zA-Z0-9\-\._]+)+)|localhost)(\/?)([a-zA-Z0-9\-\.\?\,\'\/\\\+&amp;%\$#_]*)?([\d\w\.\/\%\+\-\=\&amp;\?\:\\\&quot;\'\,\|\~\;]*)$/)
      //                   .test($scope.upload);
      $scope.showUpload = true;


      $scope.Select = function(){
        FileObject.ReadImage($scope.ngModel, $scope).then(function(result) {
          $scope.preview = result;
          $scope.showPreview = 2;
        },function(error){
          $scope.showPreview = 3;
          console.log(error);
        },function(event){
          $scope.showPreview = 1;
          $scope.load = event;
        });
      };

      $scope.Upload = function(){
        console.log($scope.upload);
        $scope.status = "Uploading!";
        var fd = new FormData();
        fd.append('file', $scope.ngModel);
        $http.post($scope.upload, fd, {
            transformRequest: angular.identity,
            headers: {'Content-Type': undefined}
        }).success(function(data){
          $scope.status = "Saved!";
          console.log("Success", data);
        }).error(function(error){
          $scope.status = "Error!";
          console.log(error);
        });
      };

      $scope.Remove = function(){
        $scope.ngModel = null;
        $scope.preview = null;
        $scope.showPreview = 0;
      };


    }]
  };
});

/*
 * Basic form input that has basic validation
 * Uses basic angular form directives 
 *
 */

module.directive("pfRadioInput", function(){
  return {
    restrict: 'E',
    scope:{
      title: "@",
    },
    transclude: true,
    replace: true,
    template:'<div class="radio"><label><span ng-transclude></span>{{title}}</label></div>',
  };
});

/*
 * Basic form input that has basic validation
 * Uses basic angular form directives 
 *
 */

module.directive("pfStateCodeInput", function(){
  return {
    restrict: 'E',
    scope: {
      title: '@',
      ngModel : '=',
      required: "=?",
      ngRequired:"=?",
    },
    replace: true,
    transclude: true,
    templateUrl: '/jjp/pf/state.html',
  };
});

/*
 * Basic form input that has basic validation
 * Uses basic angular form directives 
 *
 */

module.directive("pfTextInput", function(){
  return {
    restrict: 'E',
    scope: {
      title: '@',
      placeholder: '@?',
      ngModel : '=',
      required: "=?",
      ngRequired:"=?"
    },
    replace: true,
    transclude: true,
    templateUrl: '/jjp/pf/text.html',
  };
});

/*
 * Basic form input that has basic validation
 * Uses basic angular form directives 
 *
 */

module.directive("pfTextarea", function(){
  return {
    restrict: 'E',
    scope: {
      title: '@',
      placeholder: '@',
      ngModel : '=',
      required: "=?",
      ngRequired:"=?",
      ngMinlength:"=?",
      ngMaxlength:"=?",
      ngPattern:"@?",
      ngTrim:"=?"
    },
    replace: true,
    transclude: true,
    templateUrl: '/jjp/pf/textarea.html',
  };
});

/*
 * Basic form input that has basic validation
 * Uses basic angular form directives 
 *
 */

module.directive("pfUrlInput", function(){
  return {
    restrict: 'E',
    scope: {
      title: '@',
      ngModel : '=',
      required: "=?",
      ngRequired:"=?",
      ngTrim:"=?"
    },
    replace: true,
    transclude: true,
    templateUrl: '/jjp/pf/url.html',
  };
});

/*
 * Basic form input that has basic validation
 * Uses basic angular form directives 
 *
 */

module.directive("pfZipCodeInput", function(){
  return {
    restrict: 'E',
    scope: {
      title: '@',
      ngModel : '=',
      required: "=?",
      ngRequired:"=?",
      ngTrim:"=?"
    },
    replace: true,
    transclude: true,
    templateUrl: '/jjp/pf/zipcode.html',
  };
});

module.directive("pfConfirm", ['$modal', function($modal){
  return {
    restrict: 'A',
    scope: {
	    pfTitle: "@",
      pfMessage: "@",
      pfConfirm: "&",
    },
    link : function ($scope, $element, $attrs) {
      $element.bind('click', function () {

        var message = $scope.pfMessage || "Are you sure ?";
        var title = $scope.pfTitle || "Warning!";
        var modalHtml = '<div class="modal-header"><h1>'+title+'</h1></div>';
        modalHtml += '<div class="modal-body">' + message + '</div>';
        modalHtml += '<div class="modal-footer">';
        modalHtml += '<button class="btn btn-primary" ng-click="Ok()">OK</button>';
        modalHtml += '<button class="btn btn-warning" ng-click="Cancel()">Cancel</button></div>';

        var modalInstance = $modal.open({
          template: modalHtml,
          controller: ['$scope', '$modalInstance', function($scope, $modalInstance) {
            $scope.Ok = function() { $modalInstance.close(); };
            $scope.Cancel = function() { $modalInstance.dismiss('cancel'); };
          }],
        });
        modalInstance.result.then(function () {
            $scope.pfConfirm();
        }, function () {
            //Modal dismissed
        });
      });
    }
  };
}]);

/*
 * Basic form input that has basic validation
 * Uses basic angular form directives 
 *
 */

module.directive("pfDateInput", function(){
  return {
    restrict: 'E',
    scope: {
      title: '@',
      ngModel : '=',
      required: "=?",
      ngRequired:"=?",
      format: "@?",
      minDate: "=?",
    },
    replace: true,
    transclude: true,
    templateUrl: '/jjp/pf/date.html',
  };
});
