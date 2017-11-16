let BookUser = require('../model/bookuser');
let Book = require('../model/book');



exports.book_list_count = (req, res) => {

    BookUser.count({}, ( err, count) =>{
      res.status(200).json({count: count});
    })

};

exports.book_list = (req, res) => {

  let seq = req.query.seq;
  let query = {};
  let status = req.query.status;

  if(status && status !== 'Todos'){
    query.status = status;
  }


  let limit = 8;

  if(seq)
  {
    let q = {$lt: seq };
    query.seq = q;

  }
  BookUser.find(query).limit(limit).sort({seq: -1}).populate({path:'book'}).exec((err, books) => {
    if (err) throw err;
    res.status(200).json(books);
  });
};


exports.book_update = (req, res) => {
  let id = req.params.id;
  let status = req.body.status;
  let score = req.body.score;
  BookUser.findOne({'_id':id }).then((book) => {
    if(status){
      book.status = status;
    }
    if(score){
      book.score = score;
    }
    book
      .save()
      .then(() => {
        res.status(200).json(book);
      });

  });

};
