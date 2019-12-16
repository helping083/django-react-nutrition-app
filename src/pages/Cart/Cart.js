import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getOrdersHistory } from '../../actions/';

class Cart extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    console.log(this.props.userID);
    console.log(typeof this.props.userID)
    this.props.getOrdersHistory(this.props.userID)
  }
  render() {
    return (
      <div>
        cart works
      </div>
    );
  }
}

Cart.propTypes = {

};
const mapStateToProps = state => {
  return {
    userID: state.auth.userId
  }
}
const mapDispatchToProps = dispatch => bindActionCreators(
  {getOrdersHistory},dispatch
)
export default connect(mapStateToProps, mapDispatchToProps)(Cart);