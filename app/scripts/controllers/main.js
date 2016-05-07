'use strict';

/**
 * @ngdoc function
 * @name yoApp1229App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the yoApp1229App
 */
angular.module('yoApp1229App')
  .controller('MainCtrl', ['$scope', '$http', 
  function($scope, $http) {
  
    //Model
    $scope.employees = {};
    $scope.employee = {};

  //angularFire
  // var ref = new Firebase("https://blazing-torch-1014.firebaseio.com/Employees");
  // $scope.employees = $firebase(ref).$asArray();


  //Get All
  var getEmployees = function(){
    $http.get('/employees')
      .success(function(response){
        $scope.employees = response;
      });
  };
  getEmployees();


  //Save Id
  $scope.saveEmployee = function(){
    //angularFire
    //$scope.employees.$add({employeeName : $scope.employeeName, employeeAge : $scope.employeeAge});
    
    //Node
    $http.post('/employees', {employeeName : $scope.employee.employeeName, employeeAge : $scope.employee.employeeAge})
    .success(function(res){
        console.log(res);
    });

    $scope.employee = {};
    getEmployees();
  };

  //Delete
  $scope.delete = function(id){
    $http.delete('/employees/' + id)
      .success(function(){
        getEmployees();
      });
  };


  //GetId
  $scope.select = function (id){
    $http.get('/employees/' + id)
      .success(function(res){
        $scope.employee = res[0];
      });
  };

  //Update
  $scope.update = function(id){
    $http.put('/employees/' + id, 
      {employeeName : $scope.employee.employeeName, employeeAge : $scope.employee.employeeAge})
     .success(function(res){
        console.log(res);
        getEmployees();
      });
  };
  
}]);
