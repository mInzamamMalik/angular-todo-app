angular.module("todoApp",["home","ui.router","ngMaterial","ngMdIcons"])

.config(function($urlRouterProvider , $stateProvider/*, $mdIconProveder*/){

    //$mdIconProveder.defaultIconSet("../icons/mdi.svg");

    $urlRouterProvider.otherwise("/home");

    $stateProvider
        .state("home",{
        url : "/home",
        templateUrl : "views/home/home.html",
        controller : "homeController"
    });

});