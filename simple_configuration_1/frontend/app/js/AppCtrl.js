define([], function() {
  'use strict';

  var AppCtrl = (function() {

    function AppCtrl($scope) {
      this.$scope = $scope;

      this.$scope.text = "click count";
      this.$scope.count = 0;

      this.$scope.clickCount = angular.bind(this, this.clickCount);
    }

    AppCtrl.prototype.clickCount = function() {
      this.$scope.count++;
    };

    return AppCtrl;
  })();

  return AppCtrl;
});