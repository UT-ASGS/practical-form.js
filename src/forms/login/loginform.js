(function( practicalForms, undefined ) {
  'use strict';
  practicalForms.module.directive('pfFormLogin', function(){
    return {
      scope: {
        header: '@',
        ngModel: '=',
        ngSubmit: '&',
        email: '@',
        password: '@',
        emailHelp: '@',
        passwordHelp: '@',
      },
      restrict: 'E',
      replace: true,
      transclude: true,
      templateUrl: '/jjp/pf/loginform.html',
      link: function(scope, element){
        scope._header = practicalForms.valOrDefault(scope.header, 'Login');
        scope._email = practicalForms.valOrDefault(scope.email , 'email');
        scope._password = practicalForms.valOrDefault(scope.password , 'password');
        scope.emailHelp = practicalForms.valOrDefault(scope.emailHelp , '');
        scope.passwordHelp = practicalForms.valOrDefault(scope.passwordHelp , '');
        scope.hasTransclude = practicalForms.hasTransclude(element);
      }
    };
  });

}( window.practicalForms = window.practicalForms || {} ));
