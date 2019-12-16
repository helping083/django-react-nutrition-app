import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { authLogOut } from '../../actions';
import { Redirect } from 'react-router-dom'
class Logout extends Component {
  componentDidMount() {
    console.log('hello')
    this.props.authLogOut()
  }
  render() {
    return <Redirect to="/"/>
  }
}
const mapDispatchToProps = dispatch => bindActionCreators(
  {authLogOut},dispatch
)
export default connect(null, mapDispatchToProps)(Logout);
