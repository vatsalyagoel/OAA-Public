const angular = require('angular');
const ngRoute = require('angular-route');
import routing from './leaderboards.routes';

export class LeaderboardsController {
  $http;
  socket;


  /*@ngInject*/
  constructor($http, $scope, socket) {
    this.$http = $http;
    this.socket = socket;
  }

  $onInit() {
  }
}

export default angular.module('oaaApp.leaderboards', [
  ngRoute])
    .config(routing)
    .component('leaderboards', {
      template: require('./leaderboards.html'),
      controller: LeaderboardsController
    })
    .name;
