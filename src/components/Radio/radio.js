(function(practicalForms, undefined) {
  'use strict';
  practicalForms.module.directive('pfRadio', function() {
    return {
      restrict: 'E',
      scope: {
        title: '@',
        value: '@',
        ngModel: '=',
        required: '=?',
        ngRequired: '=?'
      },
      transclude: true,
      replace: true,
      templateUrl: '/jjp/pf/radio.html',
      link: function(scope, element, attrs) {
        scope.id = practicalForms.gerenateId();
        scope.hasTransclude = practicalForms.hasTransclude(element);
        scope.ngRequired = scope.ngRequired || false;
        scope.check = scope.ngRequired;
        scope.name = attrs.ngModel;
      }
    };
  });

}(window.practicalForms = window.practicalForms || {}));
