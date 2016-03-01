var express = require('express');
var Bookmark = require('../models/bookmark');
var router = express.Router();

/* POST add bookmark. */
router.post('/bookmarks/add', function(req, res, next) {
  new Bookmark({
    url: req.body.url,
    tags: JSON.parse(req.body.tags)
  }).save(function(err, bookmark, count) {
    console.log('ERR', err);
    console.log('ADD BOOKMARK', bookmark);
    res.send(bookmark);
  });
});

module.exports = router;
