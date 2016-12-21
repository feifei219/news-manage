var ctrl=angular.module("ctrl",[]);
var list=[
    {
        id:1,
        title:"环球时报：111111111111111",
        time:new Date(),
        content:"互联网上有一些关于“文革”的谈论。那场持续十年的内乱给中国带来巨大灾难，在“文革”发动50周年这个时间节点上，出现一些讨论是正常的。但另一方面，若是把这种讨论看作一种认识上的“撕裂”，恐怕与社会真实思想面貌不太对得上。或者换句话说，中国社会看待“文革”的共识远远大于分歧。",
        url:"#/show/1"
    },
    {
        id:2,
        title:"环球时报：22222222222222",
        time:new Date(),
        content:"互联网上有一些关于“文革”的谈论。那场持续十年的内乱给中国带来巨大灾难，在“文革”发动50周年这个时间节点上，出现一些讨论是正常的。但另一方面，若是把这种讨论看作一种认识上的“撕裂”，恐怕与社会真实思想面貌不太对得上。或者换句话说，中国社会看待“文革”的共识远远大于分歧。",
        url:"#/show/2"
    },
    {
        id:3,
        title:"环球时报：333333333333",
        time:new Date(),
        content:"互联网上有一些关于“文革”的谈论。那场持续十年的内乱给中国带来巨大灾难，在“文革”发动50周年这个时间节点上，出现一些讨论是正常的。但另一方面，若是把这种讨论看作一种认识上的“撕裂”，恐怕与社会真实思想面貌不太对得上。或者换句话说，中国社会看待“文革”的共识远远大于分歧。",
        url:"#/show/3"
    }
]
ctrl.controller('home',function($scope,$http){
    // $http({
    //     method:'get',
    //     url:'data/data.json'
    // }).then(function(res){
    //     $scope.list=res.data;
    //     var l=res.data;
    //     for(var i=0;i<l.length;i++){
    //         $scope.data=l[i];
    //         return;
    //     }
    // })
    $scope.data=list;
})
ctrl.controller('show',function($scope,$routeParams,$http){
    // $http({
    //     method:'get',
    //     url:'data/data.json'
    // }).then(function(res){
    //     $scope.list=res.data;
    //     var l=res.data;
    //     for(var i=0;i<l.length;i++){
    //         $scope.data=l[i];
    //         return;
    //     }
    // })
    $scope.one=list[$routeParams.id-1];
})
ctrl.controller('edit',function($scope,$routeParams,$location){
    // $http({
    //     method:'get', 
    //     url:'data/data.json'
    // }).then(function(res){
    //     $scope.list=res.data;
    //     var l=res.data;
    //     for(var i=0;i<l.length;i++){
    //         $scope.data=l[i];
    //         return;
    //     }
    // })
   
    $scope.one=list[$routeParams.id-1];
    $scope.submit=function(){
        if(!$scope.one.title||!$scope.one.content){
            return false;
        }
        list[$routeParams.id-1]=$scope.one;
        $location.path('/');
    } 
})

ctrl.controller('add',function($scope,$location){
    $scope.title = '';
    $scope.content = '';
    $scope.add2=function(){
        if(!$scope.title||!$scope.content){
            return false;
        }
        $scope.one={
            // id:data[data.length-1].id+1,
            id:list.length+1,
            title:$scope.title,
            content:$scope.content,
            time:new Date().getTime(),
            url:'#/show/'+this.id
        }
        list.push($scope.one);
        $location.url('/');
    }
    
})