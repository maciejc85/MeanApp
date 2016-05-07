'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('yoApp1229App'));

  var MainCtrl, 
      $scope,
      $httpBackend;


  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, _$httpBackend_) {
    
    $scope = $rootScope.$new();
    $httpBackend = _$httpBackend_;

    MainCtrl = $controller('MainCtrl', {
      $scope : $scope   
    });
  }));

  // it('should attach a list of awesomeThings to the scope', function () {
  //   expect(scope.awesomeThings.length).toBe(3);
  // });

  it('should request /employees and be greater then 0', function () {
    
    //arrange
    $httpBackend.expectGET('/employees').respond(200);

    //act
    $httpBackend.flush();
        
    //assert
    expect($scope).toBeDefined();
  });

 

  describe('Initializaton', function() {
    
    it('should should set employees to {}', function () {
         expect($scope.employees).toBeDefined();
    });

    it('should should set employee to {}', function () {
        expect($scope.employee).toBeDefined();
    });
  
  });


});
