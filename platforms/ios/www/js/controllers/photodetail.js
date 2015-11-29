'use strict';

app.controller('PhotoDetailCtrl', function($scope, Chats, Products) {

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
  $scope.image ='http://www.capebretonpost.com/media/photos/unis/2012/04/10/2012-04-10-04-55-02-garbage.jpg';


     $scope.button = function(product){
      console.log('Button was clicked', product, $scope.image);
      Products.saveProduct(product, $scope.image);
  }

});