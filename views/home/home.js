

angular.module("todoApp")
.controller("homeController",function($scope){

    $scope.newEntry = "";

    $scope.todoList =
        [
            {checked : false ,text: "this is a hard coded todo"} ,
            {checked : false ,text: "this is another todo"}
        ];

    $scope.add = function(){
            if($scope.newEntry){
                $scope.todoList.push(   {checked : false, text: $scope.newEntry}   );
                $scope.newEntry = "";
            }

        }
});