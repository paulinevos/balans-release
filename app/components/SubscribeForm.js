import React from 'react'

export default class SubscribeForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      valid: false
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(event) {
    event.preventDefault()
    alert('ja hoi werkt nog niet doei');
  }

  render() {
    return(
      <form className='subscribeForm'>
        <input aria-required='true' placeholder='Email' type='email' name='email' />
        <button onClick={this.handleClick}>Subscribe</button>
      </form>
    )
  }
}