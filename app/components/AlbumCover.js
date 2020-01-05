import React from 'react'
import SubContent from './SubContent'

export default class extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      clicked: false
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState({
      clicked: true
    })
  }

  render() {
    const {clicked} = this.state

    return (
      <div 
        className={`albumCover ${clicked ? "alignBaseline" : ""}`}
        onClick={!clicked ? this.handleClick : () => {}}
      >
        {/*This is a placeholder*/}
        <img src='../../assets/yungnnelg-contra.jpg' /> 

        {clicked && (
          <SubContent />
        )}
      </div>
    )
  }
}