'use strict';

export default function routes($routeProvider) {
  'ngInject';
  $routeProvider
    .when('/leaderboards', {
      template: '<leaderboards></leaderboards>'
    });
};

