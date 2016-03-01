var mongoose = require('mongoose');

var bookmarkSchema = new mongoose.Schema({
  bookmarkId: { type: String, unique: true, index: true },
  url: String,
  tags: []
});

module.exports = mongoose.model('Bookmark', bookmarkSchema);
