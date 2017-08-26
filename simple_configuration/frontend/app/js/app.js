require([
    './AppCtrl'
  ],
  function(AppCtrl) {
    'use strict';

    var simpleApp = angular.module('simple-app', []);
    simpleApp.controller('AppCtrl', ['$scope', AppCtrl]);
    angular.bootstrap(document, ['simple-app']);

    return simpleApp;
  });