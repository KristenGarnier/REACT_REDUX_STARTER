import React from 'react'
import {connect} from 'react-redux'

class App extends React.Component {

  render () {
    return (
      <div className="container-fluid">
        {this.props.children}
      </div>
    )
  }
}

App.propTypes = {
  children: React.PropTypes.object.isRequired
}


export default App
