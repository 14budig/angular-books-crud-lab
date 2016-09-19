
angular.module('bookApp', ['ngRoute']).config(config);

config.$inject = ['$routeProvider', '$locationProvider'];

function config( $routeProvider, $locationProvider ){
  $routeProvider
    .when('/', {
      templateUrl: '/templates/books.html',
      controllerAs: 'booksIndexCtrl',
      controller: 'BooksIndexController'
    })
    .when('/:id', {
      templateUrl: '/templates/books-show.html',
      controllerAs: 'booksShowCtrl',
      controller: 'BooksShowController'
    })
    .otherwise({
      redirectTo: '/'
    });

    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
  });
}
