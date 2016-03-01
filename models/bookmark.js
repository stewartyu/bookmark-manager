var mongoose = require('mongoose');

var bookmarkSchema = new mongoose.Schema({
  url: String,
  tags: [String]
});

module.exports = mongoose.model('Bookmark', bookmarkSchema);
