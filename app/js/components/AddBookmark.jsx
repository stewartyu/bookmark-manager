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

  let onAddBookmark = (response) => {
    dispatch(addBookmark(response._id, input.value, parseTags(tagsInput.value)));
    input.value = '';
    tagsInput.value = '';
  };

  let onUpdateBookmark = (response) => {
    dispatch(updateBookmark(response._id, input.value, parseTags(tagsInput.value)));
    input.value = '';
    tagsInput.value = '';
  };

  let onClickHandler = (response) => {
    return isEditing ? onUpdateBookmark(response) : onAddBookmark(response);
  };

  let storeBookmark = () => {
    let id = isEditing ? id : parseInt(Math.random() * 10000000, 10).toString(); // TODO: make this increment properly
    let url = isEditing ? '/api/bookmarks/update' : '/api/bookmarks/add';

    $.ajax({
      type: 'POST',
      url: url,
      data: {
        id: id,
        url: input.value,
        tags: JSON.stringify(parseTags(tagsInput.value))
      },
      success: (response) => {
        onClickHandler(response);
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
