import { createStore, combineReducers } from 'redux';

const bookmark = (state, action) => {
  switch (action.type) {
    case 'ADD_BOOKMARK':
      return {
        id: action.id,
        text: action.text,
        isEditing: false,
        tags: action.tags
      };
    case 'EDIT_BOOKMARK':
      return {
        ...state,
        isEditing: true
      };
    case 'UPDATE_BOOKMARK':
      return {
        ...state,
        text: action.text,
        isEditing: false,
        tags: action.tags
      };
    default:
      return state;
  }
};

const bookmarks = (state = [], action) => {
  switch (action.type) {
    case 'ADD_BOOKMARK':
      return [
        ...state,
        bookmark(undefined, action)
      ];
    case 'DELETE_BOOKMARK':
      return state.filter(b =>
          b.id !== action.id
      );
    case 'EDIT_BOOKMARK':
      return state.map(b => {
        if (b.id === action.id) {
          return bookmark(b, action);
        }
        return b;
      });
    case 'UPDATE_BOOKMARK':
      return state.map(b => {
        if (b.id === action.id) {
          return bookmark(b, action);
        }
        return b;
      });
    default:
      return state;
  }
};

const bookmarkApp = combineReducers({
  bookmarks
});

export default createStore(bookmarkApp)
