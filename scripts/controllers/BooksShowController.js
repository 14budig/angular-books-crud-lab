angular
  .module('bookApp')
  .controller('BooksShowController', BooksShowController);

BooksShowController.$inject = ['$http', '$routeParams'];

function BooksShowController ($http, $routeParams) {
  var vm = this;
  vm.newSong = {};

  $http({
    method: 'GET',
    url: 'books/'+$routeParams.id
  }).then(function successCallback(json) {
    vm.book = json.data;
  }, function errorCallback(response) {
    console.log('There was an error getting the data', response);
  });

}
