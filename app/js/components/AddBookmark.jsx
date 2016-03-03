import React from 'react';
import { connect } from 'react-redux';

import { addBookmark, updateBookmark } from '../actions';

let AddBookmark = ({ dispatch, isEditing, text, id, tags }) => {
  let input, tagsInput;

  let onAddBookmark = () => {
    dispatch(addBookmark(input.value, tagsInput.value));
    input.value = '';
    tagsInput.value = '';
  };

  let onUpdateBookmark = () => {
    dispatch(updateBookmark(id, input.value, tagsInput.value));
    input.value = '';
    tagsInput.value = '';
  };

  let onClickHandler = isEditing ? onUpdateBookmark : onAddBookmark;

  return (
    <div className="add">
      <input className="add__input" ref={node => {
        input = node;
      }} defaultValue={text} placeholder="Bookmark URL" />
      <span className="add__tags-container">Tags: <input className="add__tags-input" ref={node => {
        tagsInput = node;
      }} defaultValue={tags} placeholder="Comma separated" /></span>
      <button className="add__save" onClick={onClickHandler}>
        Save
      </button>
    </div>
  );
};
export default connect()(AddBookmark);
