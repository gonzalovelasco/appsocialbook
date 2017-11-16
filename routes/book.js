let express = require('express');
let router = express.Router();


let book_controller = require('../controller/bookController');

router.get('/books', book_controller.book_list);

router.put('/books/:id', book_controller.book_update);

module.exports = router;
