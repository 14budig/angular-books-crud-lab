
angular.module('bookApp', []).config(config);

config.$inject = ['$routeProvider', '$locationProvider'];

function config( $routeProvider, $locationProvider ){
  $routeProvider
    .when('/', {
      templateUrl: 'templates/books',
      controllerAs: 'booksIndexCtrl',
      controller: 'BooksIndexControl'
    })
    .when(':/id', {
      templateUrl: 'templates/books',
      controllerAs: 'booksShowCtrl',
      controller: 'BooksShowControl'
    });

    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
  });
}
