export const addBookmark = (id, text, tags) => {
  return {
    type: 'ADD_BOOKMARK',
    id,
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
    tags: tags
  };
};

export const deleteBookmark = (id) => {
  return {
    type: 'DELETE_BOOKMARK',
    id
  };
};
