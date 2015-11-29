'use strict';

app.controller('PhotoDetailCtrl', function($scope, $state, Products, $rootScope) {

    $scope.imgUri = $rootScope.imgURI;

     $scope.button = function(product){
      //console.log('Button was clicked', product, $scope.image);
      Products.saveProduct(product, $scope.imageURI).then(function(){
      	$state.go('tab.dash');
      });
  }

});