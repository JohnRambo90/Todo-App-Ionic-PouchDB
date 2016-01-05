/**
 * Created by JohnMarco on 21.12.2015.
 */
angular.module("TodoCtrl", [])


  .controller("TodoCtrl", function($scope) {
    $scope.tasks = [
      { title: 'Collect coins' },
      { title: 'Eat mushrooms' },
      { title: 'Get high enough to grab the flag' },
      { title: 'Find the Princess' }
    ];
    $scope.addTask = function (test){
      $scope.tasks.push({title : test});

    }

})
