angular.module('tamanku.controllers', [])
.controller('HomeController', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };

  $scope.goToFavorite = function(){
    $location.path("#/app/favorite")
  };
})

.controller('TamanController', function($scope, $ionicLoading, Tamans) {
  $scope.tamans = Tamans.all();

  function initialize() {
    mapElement = document.getElementById('map');
    defaultLocation = new google.maps.LatLng(-6.20603, 106.82088);
    var mapOptions = {
      center: defaultLocation,
      zoom: 16,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    $scope.map = new google.maps.Map(mapElement, mapOptions);

    // Stop the side bar from dragging when mousedown/tapdown on the map
    google.maps.event.addDomListener(mapElement, 'mousedown', function (e) {
      e.preventDefault();
      return false;
    });

    $scope.addLocation(-6.20603, 106.82088, 'VT');

    var tamans = $scope.tamans;
    for(var i = 0; i < tamans.length; i++){
      if(tamans[i].lon && tamans[i].lat){
        $scope.addLocation(tamans[i].lat, tamans[i].lon, tamans[i].nama);
      }
    }
  };

  $scope.addLocation = function(latitude, longitude, title){
    console.log("Adding " + latitude + " - " + longitude + ":" + title);
    position = new google.maps.LatLng(latitude, longitude);
    newMarker = new google.maps.Marker({
      position: position,
      map: $scope.map,
      title: title
    });
  };

  angular.element(document).ready(initialize);

  $scope.centerOnMe = function () {
    console.log("Centering");
    if (!$scope.map) {
      return;
    }

    $scope.loading = $ionicLoading.show({
      content: 'Getting current location...',
      showBackdrop: false
    });

    navigator.geolocation.getCurrentPosition(function (pos) {
      console.log('Got pos', pos);
      $scope.map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
      $scope.loading.hide();
    }, function (error) {
      alert('Unable to get location: ' + error.message);
    });
  };
})

.controller('TamanDetailController', function($scope, $stateParams, Tamans) {
  console.log($stateParams.tamanNo);
  $scope.taman = Tamans.get($stateParams.tamanNo);
});
