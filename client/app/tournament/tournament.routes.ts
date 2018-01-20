'use strict';

export default function routes($routeProvider) {
  'ngInject';
  $routeProvider
    .when('/tournament', {
      template: '<tournament></tournament>'
    });
};

