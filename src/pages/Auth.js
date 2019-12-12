import React, { Component } from 'react'
import AuthForm from '../components/authForm/AuthForm';
import { connect } from 'react-redux';
import { authLogOut } from '../actions';
import { bindActionCreators } from 'redux';

class Auth extends Component {
  constructor(props) {
    super(props)
    this.state = {
      createUser: false
    }
  }
  componentDidMount() {
    this.props.authLogOut()
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
const mapDispatchToProps = dispatch => bindActionCreators(
  {authLogOut},dispatch
)
export default connect(null, mapDispatchToProps)(Auth);