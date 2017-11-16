let BookUser = require('../model/bookuser');
let Book = require('../model/book');


exports.book_list = (req, res) => {

  let afterDate = req.query.afterDate;

  if (!afterDate){
    afterDate = new Date();
  }
  let date = {$lt: afterDate };

  let limit = 8;

  BookUser.find({/*create_at: date*/}).limit(limit).sort({create_at: -1}).populate({path:'book'}).exec((err, books) => {
    if (err) throw err;
    res.status(200).json(books);
  });
};


exports.book_update = (req, res) => {
  let id = req.query.id;
  let status = req.body.status;

  BookUser.update({'_id':id }, {$set:{status:status}},(err, book) => {
    if (err) throw err;
    res.status(200).json({});
  });

};
