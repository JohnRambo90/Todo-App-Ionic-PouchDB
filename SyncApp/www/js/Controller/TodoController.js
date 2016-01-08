/**
 * Created by JohnMarco on 21.12.2015.
 */
angular.module("TodoCtrl", [])


  .controller("TodoCtrl", function ($scope, $ionicPopup) {
    $scope.tasks = [
      {title: 'Collect coins'},
      {title: 'Eat mushrooms'},
      {title: 'Get high enough to grab the flag'},
      {title: 'Find the Princess'}
    ];
    $scope.addTask = function () {

      $ionicPopup.prompt({
        title: 'Enter a Task',
        inputPlaceholder: 'Enter a Task!'
      }).then(function (res) {
        if (!res) {
          ($ionicPopup.alert({
            title: "Please Enter a Task!"
          }))
        }
        else {
          $scope.tasks.push({title: res});
        }
      });
    }


    $scope.shouldShowDelete = false;
    $scope.showDelete = function () {
      $scope.shouldShowDelete = !$scope.shouldShowDelete;
    }
    $scope.editTask = function (index) {
     $ionicPopup.prompt({
       title: 'Edit Task',
       defaultText : $scope.tasks[index].title
     }).then(function (res) {

         $scope.tasks[index] = {title: res};


     })

    }
  })
