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
    <div>
      <input ref={node => {
        input = node;
      }} defaultValue={text} placeholder="Bookmark URL" />
      Tags: <input ref={node => {
        tagsInput = node;
      }} defaultValue={tags} placeholder="Comma separated" />
      <button onClick={onClickHandler}>
        Save
      </button>
    </div>
  );
};
export default connect()(AddBookmark);
