let nextBookmarkId = 0;

export const addBookmark = (text, tags) => {
  return {
    type: 'ADD_BOOKMARK',
    id: nextBookmarkId++,
    text,
    tags
  };
};

export const editBookmark = (id) => {
  return {
    type: 'EDIT_BOOKMARK',
    id
  };
};

export const updateBookmark = (id, text, tags) => {
  return {
    type: 'UPDATE_BOOKMARK',
    id,
    text,
    tags: parseTags(tags)
  };
};

export const deleteBookmark = (id) => {
  return {
    type: 'DELETE_BOOKMARK',
    id
  };
};
