angular.
  module('core.book').
  factory('Book', ['$resource',
    function($resource) {
      return $resource('api/user/books/:id', null, {
        query: {
          method: 'GET',
          isArray: true
        },
        update: {
          method: 'PUT'
        }
      });
    }
  ]).factory('BookCount', ['$resource',
  function($resource) {
    return $resource('api/user/books/count', null, {
      get: {
        method: 'GET'
      }
    });
  }
]);
