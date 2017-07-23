'use strict';

// Declare app level module which depends on views, and components
angular.module('F1FeederApp', [
  'F1FeederApp.controllers',
  'F1FeederApp.services',
  'ngRoute'
])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
	when("/drivers", {templateUrl: "partials/drivers.html", controller: "driversController"}).
	when("/drivers/:id", {templateUrl: "partials/driver.html", controller: "driverController"}).
	otherwise({redirectTo: '/drivers'});
}])

.filter('unique', function () {
    return function (items, filterOn) {

        if (filterOn === false) {
            return items;
        }

        if ((filterOn || angular.isUndefined(filterOn)) && angular.isArray(items)) {
            var hashCheck = {}, newItems = [];

            var extractValueToCompare = function (item) {
                if (angular.isObject(item) && angular.isString(filterOn)) {

                    var resolveSearch = function(object, keyString){
                        if(typeof object == 'undefined'){
                            return object;
                        }
                        var values = keyString.split(".");
                        var firstValue = values[0];
                        keyString = keyString.replace(firstValue + ".", "");
                        if(values.length > 1){
                            return resolveSearch(object[firstValue], keyString);
                        } else {
                            return object[firstValue];
                        }
                    }

                    return resolveSearch(item, filterOn);
                } else {
                    return item;
                }
            };

            angular.forEach(items, function (item) {
                var valueToCheck, isDuplicate = false;

                for (var i = 0; i < newItems.length; i++) {
                    if (angular.equals(extractValueToCompare(newItems[i]), extractValueToCompare(item))) {
                        isDuplicate = true;
                        break;
                    }
                }
                if (!isDuplicate) {
                    if(typeof item != 'undefined'){
                        newItems.push(item);
                    }
                }

            });
            items = newItems;
        }
        return items;
    };
});