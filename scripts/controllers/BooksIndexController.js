angular
  .module('bookApp')
  .controller('BooksIndexController', BooksIndexController);

BooksIndexController.$inject = ['$http'];

function BooksIndexController ($http) {
  var vm = this;
  vm.newBook = {};
  vm.newBook = {
    name: 'Viva Hate',
    artistName: 'Morrissey'
  };

  $http({
    method: 'GET',
    url: '/books'
  }).then(function successCallback(response) {
    vm.books = response.data;
  }, function errorCallback(response) {
    console.log('There was an error getting the data', response);
  });

  vm.editBook = function (book) {
    $http({
      method: 'PUT',
      url: '/books/'+book._id,
      data: book
    }).then(function successCallback(json) {
      // don't need to do anything!
    }, function errorCallback(response) {
      console.log('There was an error editing the data', response);
    });
  }

  vm.deleteBook = function (book) {
    $http({
      method: 'DELETE',
      url: 'books/'+ book._id
    }).then(function successCallback(json) {
      var index = vm.books.indexOf(book);
      vm.books.splice(index,1)
    }, function errorCallback(response) {
      console.log('There was an error deleting the data', response);
    });
  }

}
