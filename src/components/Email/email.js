(function(practicalForms, undefined) {
  practicalForms.module.directive("pfEmailInput", function() {
    return {
      restrict: 'E',
      scope: {
        title: '@',
        ngModel: '=',
        required: "=?",
        ngRequired: "=?",
        ngTrim: "=?"
      },
      replace: true,
      transclude: true,
      templateUrl: '/jjp/pf/email.html',
      link: function(scope, element, attrs, ctrls){
        scope.hasTransclude = practicalForms.hasTransclude(element);
        scope.$watch('subform.name.$modelValue', practicalForms.setDirty);
      }
    };
  });
}(window.practicalForms = window.practicalForms || {}));
