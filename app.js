angular.module("todoApp",["ui.router","ngMaterial"])

.config(function($urlRouterProvider , $stateProvider){

    $urlRouterProvider.otherwise("/home");

    $stateProvider
        .state("home",{
        url : "/home",
        templateUrl : "views/home/home.html",
        controller : "homeController"
    });

});