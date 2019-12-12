import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { authLogOut } from '../../actions';
class Logout extends Component {
  componentDidMount() {
    console.log('hello')
    this.props.authLogOut()
  }
  render() {
    return (<div>works</div>)
  }
}
const mapDispatchToProps = dispatch => bindActionCreators(
  {authLogOut},dispatch
)
export default connect(null, mapDispatchToProps)(Logout);
