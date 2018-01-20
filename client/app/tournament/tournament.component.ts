const angular = require('angular');
const ngRoute = require('angular-route');
import routing from './tournament.routes';

export class TournamentController {
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

export default angular.module('oaaApp.tournament', [
  ngRoute])
    .config(routing)
    .component('tournament', {
      template: require('./tournament.html'),
      controller: TournamentController
    })
    .name;
