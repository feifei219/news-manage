var news=angular.module("news",['filter','ctrl','ngRoute','direct','service']);

news.config(['$routeProvider',function($r){
    $r.when('/',{
        templateUrl:'tpls/list.html',
        controller:'home'
    }).when('/show/:id',{
        templateUrl:'tpls/show.html',
        controller:'show'
    }).when('/add',{
        templateUrl:'tpls/add.html',
        controller:'add'
    }).when('/edit/:id',{
        templateUrl:'tpls/edit.html',
        controller:'edit'
    })
}])