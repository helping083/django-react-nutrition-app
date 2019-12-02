import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/';

class Goods extends Component {
  state = {

  }
  componentDidMount() {
    this.showState()
    fetch('/nutritions/')
      .then(res=>res.json())
      .then((item)=>{console.log(item)})
      .catch((err)=>{console.log(err)});
  }
  showState = async() => {
    await this.props.onAuth()
    await console.log({loading: this.props.loading})
  }
  render() {
    return (
      <div>
        
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    loading: state.auth.loading
  }
}
const mapDispatchToProps = dispatch => {
  return {
    onAuth: () => dispatch(actions.authStart())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Goods);