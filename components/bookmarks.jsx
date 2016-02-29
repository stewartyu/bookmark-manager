import React from 'react'
import { connect } from 'react-redux'

const Bookmarks = ({bookmarks}) => (
  <div>
    <h1>Bookmarks</h1>
    {bookmarks.map(bookmark => <p key={bookmark}>{bookmark}</p>)}
  </div>
)

function mapStateToProps(bookmarks) {
  return {
    bookmarks
  }
}

export default connect(mapStateToProps)(Bookmarks)
