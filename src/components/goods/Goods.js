import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/';
import { withRouter } from 'react-router-dom';

class Goods extends Component {
  state = {
    
  }
  componentDidMount() {
    this.showState()
    this.props.onGetNutritions()
  }
  showState = async() => {
    await this.props.onAuth()
    await console.log({loading: this.props.loading})
  }
  setActive = (item,index) => {
    console.log(item)
    this.setState({ active: item, activeIndex: index })
  }
  render() {
    return (
     <React.Fragment>

     </React.Fragment>
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
    onAuth: () => dispatch(actions.authStart()),
    onGetNutritions: () => dispatch(actions.getNutritions())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Goods));