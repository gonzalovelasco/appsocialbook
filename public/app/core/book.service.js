angular.
  module('core.book').
  factory('Book', ['$resource',
    function($resource) {
      return $resource('api/user/books/:id', {}, {
        query: {
          method: 'GET',
          isArray: true
        },
        update: {
          method: 'PUT',
        }
      });
    }
  ]);
