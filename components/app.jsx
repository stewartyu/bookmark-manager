import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import store from '../store'
import Bookmarks from './bookmarks'

let reactElement = document.getElementById('react')
render(
  <Provider store={store}>
    <Bookmarks />
  </Provider>,
  reactElement
)
