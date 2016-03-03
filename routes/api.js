var express = require('express');
var Bookmark = require('../models/bookmark');
var router = express.Router();

/* POST add bookmark. */
router.post('/bookmarks/add', function(req, res, next) {
  new Bookmark({
    _id: req.body.id,
    url: req.body.url,
    tags: JSON.parse(req.body.tags)
  }).save(function(err, bookmark, count) {
    res.send(bookmark);
  });
});

/* POST update bookmark. */
router.post('/bookmarks/update', function(req, res, next) {
  Bookmark.findOne({ _id: req.body.id }, function(err, doc) {
    doc.url = req.body.url;
    doc.tags = JSON.parse(req.body.tags);
    doc.save();

    res.send(doc);
  });
});

module.exports = router;
