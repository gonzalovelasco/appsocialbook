let express = require('express');
let router = express.Router();


let book_controller = require('../controller/bookController');

router.get('/books', book_controller.book_list);

router.get('/books/count', book_controller.book_list_count);

router.put('/books/:id', book_controller.book_update);

module.exports = router;
