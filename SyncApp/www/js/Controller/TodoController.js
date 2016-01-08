/**
 * Created by JohnMarco on 21.12.2015.
 */
angular.module("TodoCtrl", [])


  .controller("TodoCtrl", function ($scope, $ionicPopup, PouchFactory) {
    $scope.tasks = [


    ];
    $scope.TodoDb=  PouchFactory.initDB("TodoDb");


    $scope.TodoDb.allDocs({
      include_docs: true,
      attachments: true
    }).then(function (result) {
      console.log(result.rows.length);
      result.rows.forEach(function (entry){
        //console.log(entry.doc.title)
        $scope.tasks.push({title: entry.doc.title});

      })
    }).catch(function (err) {
      console.log(err);
    });



    $scope.addTask = function () {
      console.log($scope.tasks)
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


          $scope.TodoDb.post({

            title: res
          }).then(function (response) {
            // handle response
          }).catch(function (err) {
            console.log(err);
          });



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
