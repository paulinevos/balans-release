import React from 'react'
import { createSubscriber } from '../utils/api'

export default class SubscribeForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      valid: false,
      showErrorMsg: false,
      email: '',
      success: null
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleSubmit(event) {
    event.preventDefault()
    
    if (!this.state.isValid) {
      this.setState({
        showErrorMsg: true
      })

      return
    }
    
    createSubscriber(this.state.email)
      .then((data) => {
        if (data === true) {
          this.setState({
            email: ''
          })
        }

        this.setState({
          success: data
        })
      })
  }

  handleChange(event) {
    let email = event.target.value

    this.setState({
      email: email,
      isValid: this.isValidEmail(email)
    })

    this.setState({
      showErrorMsg: false
    })
  }

  isValidEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  render() {
    return(
      <form 
        className='subscribeForm'
        onSubmit={this.handleSubmit}
        noValidate
      >
        <input 
          placeholder='Email' 
          type='text'
          name='email'
          value={this.state.email}
          onChange={this.handleChange}
          className={this.state.showErrorMsg ? "error" : undefined}
          required
        />
        <button 
          className='btn' 
          type='submit'
        >
          Subscribe
        </button>
        {this.state.success === false
          && <span className="smallText error">Something went wrong. Please try again later.</span>
        } 
        <span className="smallText">
          {this.state.success === true 
            ? "You're subscribed! Keep an eye on your inbox for news."
            : "Email address will be used only for sending our newsletter. Unsubscribe any time using the link in the emails."
          }
        </span>
      </form>
    )
  }
}