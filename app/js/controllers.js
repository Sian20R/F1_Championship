angular.module('F1FeederApp.controllers', [])

/* Drivers Controller */
 .controller('driversController', function($scope, ergastAPIservice) {
    $scope.nameFilter = null;
	$scope.constructorFliter = null;
    $scope.driversList = [];
	
	$scope.constructorList = [];
	
	
	$scope.nameSearchFilter = function (driver) {
		var keyword = new RegExp($scope.nameFilter, 'i');
		return !$scope.nameFilter || keyword.test(driver.Driver.givenName) || keyword.test(driver.Driver.familyName);
	};
	
	$scope.constructorSearchFilter = function (driver) {
		return !$scope.constructorFliter || $scope.constructorFliter == driver.Constructors[0].name;
	};
	
    ergastAPIservice.getDrivers().success(function (response) {
        //Dig into the responde to get the relevant data
        $scope.driversList = response.MRData.StandingsTable.StandingsLists[0].DriverStandings;
		for(var i = 0; i < $scope.driversList.length; i++) {
		  $scope.constructorList.push($scope.driversList[i].Constructors[0].name);
		}
    });
	

  })
  


/* Driver controller */
  .controller('driverController', function($scope, $routeParams, ergastAPIservice) {
    $scope.id = $routeParams.id;
    $scope.races = [];
    $scope.driver = null;

    ergastAPIservice.getDriverDetails($scope.id).success(function (response) {
        $scope.driver = response.MRData.StandingsTable.StandingsLists[0].DriverStandings[0]; 
    });

    ergastAPIservice.getDriverRaces($scope.id).success(function (response) {
        $scope.races = response.MRData.RaceTable.Races; 
    }); 
  });