

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
        };

    $scope.archive = function(){
        for(var i=0; i<$scope.todoList.length ; i++){
            if($scope.todoList[i].checked){
                $scope.todoList.splice(i,1);
                i--;
            }
        }
    };

    $scope.$watch("todoList", function( newValue, oldValue ) {
            $scope.remaining = 0;
            for(i=0; i<newValue.length; i++){
                if(newValue[i].checked){
                    $scope.remaining++;
                }
            }
        },
        true // Object equality (not just reference).
    );



});