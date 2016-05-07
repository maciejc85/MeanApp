'use strict';

angular.module('yoApp1229App')
.directive('mcNavTabs', function(){

   	return {
    	restrict: 'E',
    	transclude: true,
    	scope: {},
    	templateUrl: 'app/templates/mc-nav-tabs.html',
    	link: function (scope, element, attrs) {

    		scope.items = [{label : 'Item1', href : '#item1', status : 'active'},
                            {label : 'Item2', href : '#item2', status : ''},
                            {label : 'Items3', href : '#item3', status : ''}];

            scope.name = 'mcNav';

    		scope.tabClick = function(item) {

                for (var i = scope.items.length - 1; i >= 0; i--) {
                    scope.items[i].status = '';
                    if (scope.items[i].label === item.label){
                        scope.items[i].status = 'active';
                    }
                }
            };

    	}
  	};
});