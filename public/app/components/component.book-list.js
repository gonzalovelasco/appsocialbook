angular.
module('bookList').
component('bookList', {
  templateUrl: 'app/components/book-list.template.html',
  controller: ['Book', function BookListController(Book) {
    this.books = Book.query();

    this.setStatus = function(book,status) {
      Book.update({ id:book._id },{status: status});
    };
  }]
});
