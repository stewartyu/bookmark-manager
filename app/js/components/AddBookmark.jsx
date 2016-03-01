import React from 'react';
import { connect } from 'react-redux';

import $ from 'jquery';
import { addBookmark, updateBookmark } from '../actions';

let AddBookmark = ({ dispatch, isEditing, text, id, tags }) => {
  let input, tagsInput;

  const parseTags = (tags) => {
    return tags.split(',').map(tag => {
      return tag.trim();
    });
  };

  let onAddBookmark = () => {
    dispatch(addBookmark(input.value, parseTags(tagsInput.value)));
    input.value = '';
    tagsInput.value = '';
  };

  let onUpdateBookmark = () => {
    dispatch(updateBookmark(id, input.value, parseTags(tagsInput.value)));
    input.value = '';
    tagsInput.value = '';
  };

  let onClickHandler = isEditing ? onUpdateBookmark : onAddBookmark;

  let storeBookmark = () => {
    $.ajax({
      type: 'POST',
      url: '/api/bookmarks/add',
      data: {
        url: input.value,
        tags: JSON.stringify(parseTags(tagsInput.value))
      },
      success: (response) => {
        console.log('AJAX PROMISE', response);
        onClickHandler();
      }
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
