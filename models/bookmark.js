var mongoose = require('mongoose');

var bookmarkSchema = new mongoose.Schema({
  _id: { type: String, unique: true, index: true },
  url: String,
  tags: [String]
});

module.exports = mongoose.model('Bookmark', bookmarkSchema);
