'use strict';
const angular = require('angular');
const ngRoute = require('angular-route');


import routing from './account.routes';

export default angular.module('oaaApp.account', [
    ngRoute
])
    .config(routing)
    .run(function($rootScope) {
      'ngInject';
      $rootScope.$on('$routeChangeStart', function(event, next, current) {
        if (next.name === 'logout' && current && current.originalPath && !current.authenticate) {
          next.referrer = current.originalPath;
        }
      });
    })

    .name;
