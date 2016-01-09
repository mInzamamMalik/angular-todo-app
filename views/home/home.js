
    angular.module("home", [])
        .controller("homeController", function ($scope) {

            $scope.newEntry = "";

            $scope.todoList =
                [
                    {checked: false, text: "this is a hard coded todo"},
                    {checked: false, text: "this is another todo"}
                ];

            $scope.add = function () {
                if ($scope.newEntry) {
                    $scope.todoList.push({checked: false, text: $scope.newEntry});
                    $scope.newEntry = "";
                }
            };

            $scope.archive = function () {
                angular.forEach($scope.todoList, function(item , key ,obj){
                    console.log(key , item);
                    if (item.checked) {
                        console.log(key);
                        obj.splice(key--, 1);
                        console.log(key);
                    }

                }) ;

            };

            $scope.$watch("todoList", function (newValue, oldValue) {
                    $scope.remaining = newValue.length;
                    for (i = 0; i < newValue.length; i++) {
                        if (newValue[i].checked) {
                            $scope.remaining--;
                        }
                    }
                }, true // Object equality (not just reference).
            );


        });
