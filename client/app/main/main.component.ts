const angular = require('angular');
const ngRoute = require('angular-route');
import routing from './main.routes';

export class MainController {
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

export default angular.module('oaaApp.main', [
  ngRoute])
    .config(routing)
    .component('main', {
      template: require('./main.html'),
      controller: MainController
    })
    .name;
