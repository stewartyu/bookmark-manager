import React from 'react';
import { Provider } from 'react-redux';

import AddBookmark from './AddBookmark.jsx';
import BookmarkList from './BookmarkList.jsx';
import store from '../store';


const BookmarkApp = () => (
  <div>
    <AddBookmark />
    <BookmarkList />
  </div>
);

export default (
  <Provider store={store}>
    <BookmarkApp />
  </Provider>
)
