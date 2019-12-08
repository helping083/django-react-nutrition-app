import React, { Component } from 'react'
import AuthForm from '../components/authForm/AuthForm';

class Auth extends Component {
  constructor(props) {
    super(props)
    this.state = {
      createUser: false
    }
  }
  
  toggleCreateUser = () => {
    this.setState(prevState=>({
      createUser: !prevState.createUser
    }))
  }
  render() {
    return (
      <div>
        <p>auth Component works </p>
        <AuthForm
          createUser={this.state.createUser}
          toggleUser={this.toggleCreateUser}
        />
      </div>
    )
  }
}
export default Auth;