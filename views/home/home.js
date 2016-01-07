

angular.module("todoApp")
.controller("homeController",function($scope){

    $scope.todoList =
        [
            {checked : false ,text: "this is a hard coded todo"} ,
            {checked : false ,text: "this is another todo"}
        ];


    $scope.listToBeDelete = [];

    $scope.onCheck = function(){
        alert("dg");
    };


    $scope.add = function(){
            if($scope.newEntry){
                $scope.todoList.push($scope.newEntry);
                $scope.newEntry = "";
            }

        }
});