var express = require('express');
var Bookmark = require('../models/bookmark');
var router = express.Router();

/* POST add bookmark. */
router.post('/bookmarks/add', function(req, res, next) {
  console.log('REQ BODY', req.body);
  new Bookmark({
    bookmarkId: req.body._id,
    url: req.body.url,
    tags: req.body.tags[]
  }).save(function(err, bookmark, count) {
    console.log('ADD BOOKMARK', bookmark);
    res.send(bookmark);
  });
});

module.exports = router;
