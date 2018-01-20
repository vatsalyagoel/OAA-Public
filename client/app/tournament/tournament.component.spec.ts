'use strict';

import main from './tournament.component';
import {TournamentController} from './tournament.component';

describe('Component: TournamentComponent', function() {

  beforeEach(angular.mock.module(main));
  beforeEach(angular.mock.module('socketMock'));

  var scope;
  var mainComponent;
  var $httpBackend;

  // Initialize the controller and a mock scope
  beforeEach(inject(function(
    _$httpBackend_,
    $http,
    $componentController,
    $rootScope,
    socket) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('/api/tournament')
        .respond(['HTML5 Boilerplate', 'AngularJS', 'Karma', 'Express']);

      scope = $rootScope.$new();
      mainComponent = $componentController('tournament', {
        $http: $http,
        $scope: scope,
        socket: socket
      });
  }));
});
