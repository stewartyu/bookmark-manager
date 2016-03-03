import React from 'react';
import { connect } from 'react-redux';

import AddBookmark from './AddBookmark.jsx';

import { editBookmark, deleteBookmark } from '../actions';

const Bookmark = ({
  onEditClick,
  onDeleteClick,
  isEditing,
  text,
  id,
  tags
}) => {
  let renderedBookmark = <li>
    <p>{text}</p>
    <ul>
      {tags.map(tag => (
        <li key={tag}>{tag}</li>
      ))}
    </ul>
    <a onClick={onEditClick}>edit</a>
    <a onClick={onDeleteClick}>delete</a>
  </li>;
  let editingBookmark = <li><AddBookmark isEditing={isEditing} text={text} id={id} tags={tags} /></li>;

  return isEditing ? editingBookmark : renderedBookmark;
};

const BookmarkList = ({
  bookmarks,
  onEditClick,
  onDeleteClick
  }) => (
  <ul className="bookmark-list">
    {bookmarks.map(bookmark =>
        <Bookmark
          key={bookmark.id}
          {...bookmark}
          onEditClick={() => onEditClick(bookmark.id)}
          onDeleteClick={() => onDeleteClick(bookmark.id)}
          />
    )}
  </ul>
);

const mapStateToProps = (
  state
) => {
  return {
    bookmarks: state.bookmarks
  };
};
const mapDispatchToProps = (
  dispatch
) => {
  return {
    onEditClick: (id) => {
      dispatch(editBookmark(id));
    },
    onDeleteClick: (id) => {
      dispatch(deleteBookmark(id));
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookmarkList);
