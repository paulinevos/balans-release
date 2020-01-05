import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import AlbumCover from './components/AlbumCover'

class App extends React.Component {
  render() {
    return (
      <AlbumCover />
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
)