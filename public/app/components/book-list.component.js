angular.
module('bookList').
component('bookList', {
  templateUrl: 'app/components/book-list.template.html',
  controller: ['Book','BookCount', function BookListController(Book,BookCount) {
    self = this;

    self.busy = false;
    self.seq = null;
    self.status = 'Todos';
    

    self.books = Book.query();

    BookCount.get(function(data){ 
      self.setCount(data.count);
    });


    self.nextPage = function () {
      if (self.busy) return;
      self.busy = true;      
      var data = Book.query({status: self.status, seq: self.seq},function() {
        for (var i = 0; i < data.length; i++) {
          self.books.push(data[i]);
        }
        self.seq = self.books[self.books.length - 1].seq;
        self.busy = false;
      });

    };      
    
    self.setCount = function(count) {
      self.count = count;
    };
    self.filter = function(filter) {
      self.status = filter;
      self.books = Book.query({status: filter});      
    }

    self.rate = function(rating,book) {
      book.book.score = rating;
      book.score = rating;
      Book.update({ id:book._id },{score: rating});
      
    };
    self.getRate = function(rate) {
      return rate/2;
    }
      
      
    self.setStatus = function(book,status) {
      book.status = status;
      Book.update({ id:book._id },{status: status});
    };
  }]
});
