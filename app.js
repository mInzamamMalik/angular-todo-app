angular.module("todoApp",["ui.router"])

.config(function($urlRouterProvider , $stateProvider){

    $urlRouterProvider.otherwise("/home");

    $stateProvider.
        state("home",{
        url : "/home",
        templateUrl : "views/home/home.html",
        controller : "homeController"
    });

});