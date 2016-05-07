'use strict';

describe('Directive: mcDirective', function () {

  // load the controller's module
  beforeEach(module('yoApp1229App'));
  beforeEach(module('app/templates/mc-nav-tabs.html')); 

  var rootScope,
      scope, 
      $compile,
      simpleHtml = '<mc-nav-tabs></mc-nav-tabs>',
      $httpBackend,
      element;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($rootScope, _$compile_, $injector, _$httpBackend_) {
    $httpBackend = _$httpBackend_;
    $compile = _$compile_;
    scope = $rootScope;
  }));

  afterEach(function(){

  });

  it('should contain a scope.name', function () {
    //create an instance of the directive
    element = angular.element(simpleHtml);
    $compile(element)(scope);
    scope.$digest();

    //Get the isolate scope for the directive
    var isoScope = element.isolateScope();

    expect(isoScope.name).toBeDefined();
  });

  it('should contain a scope.name with a value of mcNav', function () {
    //create an instance of the directive
    element = angular.element(simpleHtml);
    $compile(element)(scope);
    scope.$digest();

    //Get the isolate scope for the directive
    var isoScope = element.isolateScope();

    expect(isoScope.name).toEqual('mcNav');
  });

  it('should contain a scope.items array', function () {
    //create an instance of the directive
    element = angular.element(simpleHtml);
    $compile(element)(scope);
    scope.$digest();

    //Get the isolate scope for the directive
    var isoScope = element.isolateScope();

    expect(isoScope.items).toBeDefined();
  });

  it('should contain an items array with the legth of 3', function(){
    
    //create an instance of the directive
    element = angular.element(simpleHtml);
    $compile(element)(scope);
    scope.$digest();

    //Get the isolate scope for the directive
    var isoScope = element.isolateScope();

    //assertions
    expect(isoScope.items.length).toEqual(3);
  });

  it('should contain one active element', function(){
    
    //create an instance of the directive
    element = angular.element(simpleHtml);
    $compile(element)(scope);
    scope.$digest();

    //Get the isolate scope for the directive
    var isoScope = element.isolateScope();

    //assertions
    expect(element.find('li').attr('class')).toEqual('active');
  });

  it('should contain tabClick function', function(){
    
    //create an instance of the directive
    element = angular.element(simpleHtml);
    $compile(element)(scope);
    scope.$digest();

    //Get the isolate scope for the directive
    var isoScope = element.isolateScope();

    //assertions
    expect(isoScope.tabClick).toBeDefined();

    //console.log(isoScope.tabClick);
  });

  


});