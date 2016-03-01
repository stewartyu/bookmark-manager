import React from 'react';
import { connect } from 'react-redux';

import AjaxPromise from 'ajax-promise';
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

  const parseTags = (tags) => {
    return tags.split(',').map(tag => {
      return tag.trim();
    });
  };

  let storeBookmark = () => {
    AjaxPromise.post('/api/bookmarks/add', {
      url: input.value,
      tags: parseTags(tagsInput.value)
    }).then((response) => {
      console.log('AJAX PROMISE', response);
      onClickHandler();
    });
  };

  return (
    <div>
      <input ref={node => {
        input = node;
      }} defaultValue={text} placeholder="Bookmark URL" />
      Tags: <input ref={node => {
        tagsInput = node;
      }} defaultValue={tags} placeholder="Comma separated" />
      <button onClick={storeBookmark}>
        Save
      </button>
    </div>
  );
};
export default connect()(AddBookmark);
